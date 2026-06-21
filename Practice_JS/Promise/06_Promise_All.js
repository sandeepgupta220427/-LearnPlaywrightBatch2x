// Promise.all => Very Rarely used
console.log("Example 01");
let checkAuth = Promise.resolve("Auth Ok");
let checkDb = Promise.resolve("DB ok");
let checkCahe = Promise.resolve("Cache ok");

Promise.all([checkAuth, checkDb, checkCahe]).then(function (results) {
    console.log("All checks: ", results);
});
console.log("***********************************************");

console.log("Example 02");
Promise.all([
    Promise.resolve("OK"),
    Promise.resolve("OK"),
    Promise.resolve("OK")
]).then(function (r) {
    console.log(r);
}).catch(function (err) {
    console.log("Failed: ", err);
});
console.log("***********************************************");

console.log("Example 03");
Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB down"),
    Promise.resolve("OK")
]).then(function (r) {
    console.log(r);
}).catch(function (err) {
    console.log("Failed: ", err);
});
console.log("***********************************************");


