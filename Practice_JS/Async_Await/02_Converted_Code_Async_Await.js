function openBrowser() {
    return new Promise(function (resolve) {
        // Code to open the Browser
        resolve("Open the Browser");
    })
}

function goToLoin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded")
    })
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials Entered");
    })
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in Sucessflly")
    })
}

async function runLoginFlow() {
    let msg1 = await openBrowser();
    console.log("Step 1: ", msg1);

    let msg2 = await goToLoin();
    console.log("Step 2: ", msg2);

    let msg3 = await enterCredentials();
    console.log("Step 3: ", msg3);

    let msg4 = await clickLogin();
    console.log("Step 4: ", msg4);
}

runLoginFlow();
