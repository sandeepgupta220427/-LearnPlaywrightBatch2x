// Itarate => Go from one to another

let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}
console.log("**********************************");

// for...of (cleanest for values)
for (let test of tests) {
    console.log(test); // of => gives value
}
console.log("**********************************");

//forEach (no return value)
tests.forEach((test, index) => {
    console.log(`${index}:${test}`)
});
console.log("**********************************");

//entries() => index + value
for (let [i, test] of tests.entries()) {
    console.log(i, test)
}
console.log("**********************************");

// in
let students01 = ["aaa", "bbb", "ccc", "ddd"];

for (let student in students01) {
    console.log(student); // in => gives index
}
console.log("**********************************");

// in
let students02 = ["xxx", "yyy", "zzz"];

for (let student in students02) {
    console.log(student + " => " + students02[student]);
}