// 2D Arrays - Common Operations

let score = [
    [85, 90, 78], //sdudent 0
    [60, 45, 70], //sdudent 1
    [95, 88, 92]  //sdudent 2
];

let rowSum = score.map(row => row.reduce((a, b) => a + b, 0)); // This will used very few times
console.log(rowSum);
console.log("**************************************************");

let suiteResults = [
    ['login-pass', 'ragister-pass', 'logout-pass'], //Auth suite
    ['search-pass', 'filter-fail', 'sort-pass'], //Search suite
    ['checkout-fail', 'payment-fail', 'confirm-pass'] //Payment suite
];

for (i = 0; i < suiteResults.length; i++) {
    for (j = 0; j < suiteResults[i].length; j++) {
        if (suiteResults[i][j].includes("fail")) {
            console.log(suiteResults[i][j]);
        }
    }
}
console.log("**************************************************");

let execTimes = [
    [120, 340, 89, 450], // Dev
    [200, 410, 100, 520], // staging
    [180, 390, 95, 490]  // prod
];

for (let i = 0; i < execTimes.length; i++) {
    for (let j = 0; j < execTimes[i].length; j++) {
        if (execTimes[i][j] > 200) {
            console.log(`Exceeds the time and time is ${(execTimes[i][j])}`);

        }
    }
}