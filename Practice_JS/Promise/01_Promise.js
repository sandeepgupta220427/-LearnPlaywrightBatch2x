// A Promise is an OBJECT. It wraps a value that will be available later.

let order = new Promise(function (resolve, reject) {
    let foodready = true;
    if (foodready) {
        resolve("Pizza is delivered!");
    } else {
        reject("Order cancelled")
    }
});
console.log(order);

