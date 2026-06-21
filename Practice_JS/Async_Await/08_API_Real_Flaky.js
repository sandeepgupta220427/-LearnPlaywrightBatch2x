// Flaky Test => 100 TC, 3 Failed, I want to rerun them 3, these are Flaky, it sometime pass, sometime Fail
// 3 I want to rerun

// Retry Pattern with Async/Await => Real QA

let attempt = 0;

function flakyAPI() {
    attempt++;
    if (attempt < 3) {
        return Promise.reject("Attempts: " + attempt + " failed!")
    }
    return Promise.resolve("Attempts: " + attempt + " Success!")
}

async function retryTesting(maxRetries) {
    for (let i = 1; i <= maxRetries; i++) {
        try {
            let result = await flakyAPI();
            console.log("Pass Promise!, I will exit also", result);
            break; //return; // If we do not use break OR return, You will be never out of the loop due to this
        }
        catch (error) {
            console.log("Fail Promise!", error);
        }
    }
}

retryTesting(5);

