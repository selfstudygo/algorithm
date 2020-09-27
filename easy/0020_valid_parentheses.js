var isValid = function(s) {
  if(['}', ']', ')'].indexOf(s[0]) > -1) return false;
  const pair = {'}': '{', ')': '(', ']': '['};
  const stack = [s[0]];
  let i = 1;
  while(i < s.length) {
    if(stack.length && stack[stack.length -1] === pair[s[i]]) {
      stack.pop();
    } else {
      stack.push(s[i])
    }
    i++;
  }
  return !stack.length; // faster
};

var isValid = function(s) {
  if(['}', ']', ')'].indexOf(s[0]) > -1) return false;
  const pair = {'}': '{', ')': '(', ']': '['};
  const stack = [s[0]];
  let i = 1;
  while(i< s.length) {
    const ch = s[i];
    if(!pair[ch]) {
      stack.push(ch);
    } else {
      if(!stack.length || stack.pop() !== pair[ch]) {
        return false;
      }
    }
    i++
  }
  return !stack.length;
};
