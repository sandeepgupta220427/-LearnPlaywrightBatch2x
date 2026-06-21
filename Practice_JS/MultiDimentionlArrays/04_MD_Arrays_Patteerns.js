/* n = 3
*
**
***
*/

let n = 3;
for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        // row = row + "*";
        row += "*";
    }
    // console.log(row.trim());
    console.log(row);
}
console.log("******************************************");

/*
*****
****
***
**
*
*/
let n = 5;
for (let i = n; i >= 1; i--) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}
console.log("******************************************");
/*
    *
   ***
  *****
 *******
*********
*/
let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }
    console.log(row);
}
console.log("******************************************");
/*
*****
 ***
 **
 *
*/
let n = 5;
for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }
    console.log(row);
}
console.log("******************************************");
console.log("******************************************");

let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}
console.log("******************************************");

let n = 5;
for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row
    );
}
console.log("******************************************");

let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }
    console.log(row);

}
console.log("******************************************");

let n = 5;
for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }
    console.log(row);

}

