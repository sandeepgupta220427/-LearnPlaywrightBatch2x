let testRun = new Promise(function (resolve, reject) {
    // resolve("Assertion PASS");
    reject("Assertion Failed");
})

testRun.then(function (msg) { //Resolve
    console.log(msg);

}).catch(function (error) { //Reject
    console.log(error);

}).finally(function () { //Always Executed
    console.log("I will be executed anyhow!");
});

// .finally() ALWAYS runs — whether the test passed or failed. Just like afterEach() in Cypress or Playwright.




