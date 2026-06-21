function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name + ": 200 OK")
        }, 2000);
    })
}

// This is not going to use in Playwright automation
// This is use for Parallel Execution
// We have to use Promise.all() for parallel execution
async function parallelTest() {
    console.log("Test start here!");
    let start = Date.now();

    let [r1, r2, r3] = await Promise.all([
        apiCall("Auth Service"),
        apiCall("User Service"),
        apiCall("Payment Service")
    ])

    console.log(r1);
    console.log(r2);
    console.log(r3);

    console.log("Time: ~ " + (Date.now() - start) + "ms");

}

parallelTest();