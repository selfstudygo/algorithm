/**
 * @param {string[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  const getDfs = (i, j) => {
    if ( !grid[ i ] || grid[ i ][ j ] !== '1' ) {
      return;
    }
    grid[ i ][ j ] = "-1";
    getDfs(i + 1, j);
    getDfs(i - 1, j);
    getDfs(i, j + 1);
    getDfs(i, j - 1);
  }

  let count = 0;
  for ( let i = 0; i < grid.length; i++ ) {
    for ( let j = 0; j < grid[ i ].length; j++ ) {
      if ( grid[ i ][ j ] === '1' ) {
        count += 1;
        getDfs(i, j);
      }
    }
  }
  return count;
}

/**
 Input: grid = [
 ["1","1","1","1","0"],
 ["1","1","0","1","0"],
 ["1","1","0","0","0"],
 ["0","0","0","0","0"]
 ]
 */
