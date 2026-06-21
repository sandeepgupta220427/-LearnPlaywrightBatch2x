// Basic Async/Await

async function getTestResults() {
    return "Pass";
};

// async function Always returns a Promise
getTestResults().then(function (result) {
    console.log(result);
});
console.log("******************************************");

async function runTest() {
    let result01 = await Promise.resolve("Login test passed");
    console.log(result01);

    let result02 = await Promise.resolve("Dashboard test passed");
    console.log(result02);
}

runTest();
console.log("******************************************");

