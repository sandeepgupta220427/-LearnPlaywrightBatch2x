let testMtrix = [
    ['login', 'pass', 200],
    ['checkout', 'fail', 404],
    ['search', 'pass', 180]
];

// Most of the time this is used
for (let i = 0; i < testMtrix.length; i++) {

    for (let j = 0; j < testMtrix[i].length; j++) {
        console.log(testMtrix[i][j]);
    }
    console.log();
}
console.log("***************************************************");

// This is used very few times
for (let row of testMtrix) {
    for (let cell of row) {
        console.log(cell + " ");
    }
    console.log();
}
console.log("***************************************************");

// forEach
// This is used very few times

testMtrix.forEach(row => {
    row.forEach(cell => console.log(cell + ""));
    console.log();
});

