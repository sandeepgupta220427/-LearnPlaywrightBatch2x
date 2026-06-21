let arr01 = [2, 4, 6];

// Add to end of array
arr01.push(8);
console.log(arr01);
console.log("***********************************************");

// Remove from end of array
arr01.pop();
console.log(arr01);
console.log("***********************************************");

// Add multiple element to end of array
arr01.push(8, 10, 12);
console.log(arr01);
console.log("***********************************************");

// Add at the begining of an array
arr01.unshift(11);
console.log(arr01);
console.log("***********************************************");

// Add multiple element at the begining of an array
arr01.unshift(22, 33);
console.log(arr01);
console.log("***********************************************");

// Remove from the begining of an array
arr01.shift();
console.log(arr01);
console.log("***********************************************");

//splice
// arr.splice(startIndex, deleteCount, item1, item2, ...)
// Modifies the original array. Returns an array of the deleted elements.
// Formula: arr.splice(start_index, how_many_to_delete, items_to_add...)


//[33, 11,  2,  4,  6,  8, 10, 12]
//splice (start, deleteCount,........itemsToAdd)
// Removes exactly 1 item starting at index 2
arr01.splice(2, 1); // removes 1 item at index 2
console.log(arr01);
console.log("***********************************************");

//[33, 11, 4,  6,  8, 10, 12]
//slice (start, deleteCount,........itemsToAdd)
// Removes 2 consecutive items starting at index 2
arr01.splice(2, 2); // removes 2 item at index 2
console.log(arr01);
console.log("***********************************************");

// [ 33, 11, 8, 10, 12 ]
// Deletes 0 items. Inserts the number 99 right at index 2
arr01.splice(2, 0, 99); // index, deleteCount, itemsToAdd
console.log(arr01);
console.log("***********************************************");

// [ 33, 11, 99, 8, 10, 12 ]
// Replaces: Deletes 2 items starting at index 1, and inserts 88 and 77 in their place
arr01.splice(1, 2, 88, 77);
console.log(arr01);
console.log("***********************************************");