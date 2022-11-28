var numIslands = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count = count + dfs(grid, i, j);
      }
    }
  }

  function isValid(grid, row, col) {
    if (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length && grid[row][col] === '1') {
      return true;
    } else {
      return false;
    }
  }

  function dfs(grid, row, col) {
    // console.log(grid, row, col)
    //base case
    // if (row < 0 || row > grid.length - 1 || col < 0 || col > grid[row].length - 1 || grid[row][col] === '0') {
    //   return;
    // }

    grid[row][col] = '0';
    if (isValid(grid, row + 1, col)) {
      dfs(grid, row + 1, col);
    }
    if (isValid(grid, row - 1, col)) {
      dfs(grid, row - 1, col);
    }
    if (isValid(grid, row, col + 1)) {
      dfs(grid, row, col + 1);
    }
    if (isValid(grid, row, col - 1)) {
      dfs(grid, row, col - 1);
    }
    return 1;
  }
  return count;
};

console.log(
  numIslands([
    ['1', '0', '0'],
    ['0', '1', '0'],
    ['0', '0', '1'],
  ])
);
