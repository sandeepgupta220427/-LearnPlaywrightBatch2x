let apiCall = new Promise(function (resolve, reject) {
    // I will make a call here ......
    reject("500 Error");
});

// .catch() runs ONLY when the promise is rejected.
//  .then() is completely skipped.

apiCall.then(function (data) {
    console.log("Data is success");
}).catch(function (error) {
    console.log(error);
});
