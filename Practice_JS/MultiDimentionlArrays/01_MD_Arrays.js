let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

// Access values - [row][col]
console.log(grid[0][0]);
console.log(grid[1][2]);
console.log(grid[2][1]);
console.log(grid[2][3]);

// Modify values
grid[2][0] = 77;
grid[0][0] = 11;
grid[2][2] = 99;
console.log(grid);

// Array length = Numbers of rows
console.log("Length of the array is: " + grid.length);
console.log(`Length of the arrays is ${(grid.length)}, which is the number of rows in MD arrays`);

// Number of columns in a row
console.log(grid[0].length);
console.log(`Number of columns in a row is ${(grid[0].length)}`);

//Last element of the MD array
console.log(grid[grid.length - 1][grid[0].length - 1]);
