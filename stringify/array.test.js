// const a = [1, "ab\"c", true, undefined, null, _=>3, Symbol()];
// JSON.stringify(a)  === arrayStringify(a);가 되도록 arrayStringify를 구현
// [1,"ab\"c",true,null,null,null,null]

const validator = {
    isArray(arr) {
        return Array.isArray(arr);
    }
};

const {arrayForPublic, arrayRecursivePublic, arrayRecursiveTailPublic} = (() => {
    const trimAndWrap = (str, start, end) => {
        return `${start}${str.replace(/,\s*$/, '')}${end}`;
    };

    const separator = () => ',';

    const processChar = (char) => {
        switch (char) {
            case '\\':
                return '\\\\';
            case '\n':
                return '\\n';
            case '\t':
                return '\\t';
            case '\v':
                return '\\v';
            case '\b':
                return '\\b';
            case '\r':
                return '\\r';
            case '\s':
                return 's';
            case '"' :
                return '\\"';
            default:
                return char;
        }
    };

    const quote = (str) => {
        return `"${str}"`;
    };

    const stringifyCore = (v, strHandler) => {
        const t = typeof v;
        switch (t) {
            case 'boolean':
                return v.toString();
            case 'number': {
                if (v === 0) {
                    // -0
                    return '0';
                }
                if (isNaN(v)) {
                    return null;
                }
                if (!isFinite(v)) {
                    return null;
                }
                return v.toString();
            }
            case 'string':
                return quote(strHandler(v, 0, ''));
            default:
                // unknown
                return null;
        }
    };

    // for recursiveTail
    const arrayRecursive = (arr, i, processString) => {
        if (arr.length === i) return '';
        return stringifyCore(arr[i], processString) + separator() + arrayRecursive(arr, i + 1, processString);
    };

    const arrayRecursivePublic = (arr) => {
        if (!validator.isArray(arr)) throw `non-supporting type: ${typeof arr}`;
        const processString = (str, i) => {
            return str.length === i ? '' : (processChar(str[i]) + processString(str, i + 1));
        }
        return trimAndWrap(arrayRecursive(arr, 0, processString), '[', ']');
    };


    // for recursiveTail
    const arrayRecursiveTail = (arr, i, str, processString) => {
        if (arr.length === i) return str;
        return arrayRecursiveTail(arr, i + 1, str + stringifyCore(arr[i], processString) + separator(), processString);
    };

    const arrayRecursiveTailPublic = (arr) => {
        if (!validator.isArray(arr)) throw `non-supporting type: ${typeof arr}`;
        const processString = (str, i, res) => {
            return str.length === i ? res : processString(str, i + 1, res + processChar(str[i]));
        }
        return trimAndWrap(arrayRecursiveTail(arr, 0, '', processString), '[', ']');
    };


    // for loop
    const arrayFor = (arr, processString) => {
        let str = '';
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            str += stringifyCore(arr[i], processString) + separator()
        }
        return str;
    };

    const arrayForPublic = (arr) => {
        if (!validator.isArray(arr)) throw `non-supporting type: ${typeof arr}`;
        const processString = (str) => {
            let newStr = '';
            for (let i = 0; i < str.length; i++) {
                newStr += processChar(str[i]);
            }
            return newStr;
        }
        return trimAndWrap(arrayFor(arr, processString), '[', ']');
    };

    return {arrayForPublic, arrayRecursivePublic, arrayRecursiveTailPublic};
})();

describe('stringify', () => {
    it('[1, "ab\\"c", true, undefined, null, _=>3, Symbol()]', () => {
        const a = [1, "ab\"c", true, 'a\bc', null, _ => 3, Symbol(), 'a\nb', '`${a}`', '\s', '\\s', '\\'];
        expect(arrayRecursivePublic(a)).toBe(JSON.stringify(a));
    })
    it('[1, "ab\\"c", true, undefined, null, _=>3, Symbol()]', () => {
        const a = [1, "ab\"c", true, 'a\bc', null, _ => 3, Symbol(), 'a\nb', '`${a}`', '\s', '\\s', '\\'];
        expect(arrayRecursiveTailPublic(a)).toBe(JSON.stringify(a));
    })
    it('[1, "ab\\"c", true, undefined, null, _=>3, Symbol()]', () => {
        const a = [1, "ab\"c", true, 'a\bc', null, _ => 3, Symbol(), 'a\nb', '`${a}`', '\s', '\\s', '\\'];
        expect(arrayForPublic(a)).toBe(JSON.stringify(a));
    })
})
