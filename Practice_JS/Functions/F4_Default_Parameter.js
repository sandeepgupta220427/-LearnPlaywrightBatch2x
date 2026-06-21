// Functions with default parameters

function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`);
}
retry("Login");
retry("Checkout", 5);
retry("API Test", 7, 2000);
console.log("***********************************");






