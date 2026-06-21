// Real QA scenario: E2E Login flow app.vwo.com

function openBrowser(callback) {
    console.log("Opening the browser");
    setTimeout(function () {
        console.log("Step - 1: Browser is starting..........");
        callback();
    }, 500);
}

function goToLoginPage(callback) {
    setTimeout(function () {
        console.log("Step - 2: Login page is loaded");
        callback();
    }, 500);
}

function enterCredentials(callback) {
    setTimeout(function () {
        console.log("Step - 3: Credentials are entered");
        callback();
    }, 500);
}

function clickLoginButton(callback) {
    setTimeout(function () {
        console.log("Step - 4: Login button clicked");
        callback();
    }, 500);
}

// This is callback Hell
openBrowser(function () {
    goToLoginPage(function () {
        enterCredentials(function () {
            clickLoginButton(function () {
                console.log("Test completed");
            })
        })
    })
})

/*
See how the code shifts RIGHT with every step? That's the **Pyramid of Doom**. 

Imagine 10 steps completely unreadable. 

This is WHY Promises and async/await were invented.
*/






