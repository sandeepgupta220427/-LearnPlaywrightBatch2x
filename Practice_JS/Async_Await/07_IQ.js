async function sayHello() {
    return "Hello, QA!";
}

sayHello().then(function (msg) {
    console.log(msg);
});
console.log("****************************************");

async function getStatus() {
    let status = await Promise.resolve(200);
    console.log("Status code:", status);
}

getStatus();
console.log("****************************************");

async function testFlow() {
    let step1 = await Promise.resolve("Opend browser");
    console.log(step1);

    let step2 = await Promise.resolve("Clicked login");
    console.log(step2);

    let step3 = await Promise.resolve("Verified dashboard");
    console.log(step3);
}

testFlow();
console.log("****************************************");

async function riskyTest() {
    try {
        let data = await Promise.reject("Element not found");
        console.log(data);
    } catch (err) {
        console.log("Test failed:", err);
    }
}

riskyTest();
console.log("****************************************");

async function apiTest() {
    try {
        let response = await Promise.resolve({ status: 201, body: "Created" });
        console.log("Status:", response.status);
        console.log("Body:", response.body);
    } catch (err) {
        console.log("Error:", err);
    } finally {
        console.log("Test Completed!");
    }
}

apiTest();
console.log("****************************************");

console.log("A");

async function test() {
    console.log("B");
    await Promise.resolve();
    console.log("C");
}

test();
console.log("D");
console.log("****************************************");

async function runTest() {
    let [a, b, c] = await Promise.all([
        Promise.resolve("Login: Ok"),
        Promise.resolve("Cart: Ok"),
        Promise.resolve("Checkout: Ok")
    ])

    console.log(a);
    console.log(b);
    console.log(c);
}

runTest();
console.log("****************************************");

async function healthCheck() {
    let result = await Promise.allSettled([
        Promise.resolve("Auth: Up"),
        Promise.reject("DB: Down"),
        Promise.resolve("Cache: Up")
    ]);

    result.forEach(function (r) {
        let status = r.status === "fulfilled" ? "✅" : "❌";
        let msg = r.value || r.reason;
        console.log(status + " " + msg);
    });
}

healthCheck();
console.log("****************************************");

async function checkEndPoints() {
    let endPoints = ["/login", "/users", "/orders"];

    for (let i = 0; i < endPoints.length; i++) {
        let result = await Promise.resolve(endPoints[i] + " => 200");
        console.log(result);
    }

    console.log("All check are done");
}

checkEndPoints();
console.log("****************************************");

// Async IIFE (Immediately Invoked functions)

(async function () {
    let msg = await Promise.resolve("Quick async test!");
    console.log(msg);
})();

console.log("Outside!");
console.log("****************************************");

async function add(a, b) {
    return a + b;
}

async function main() {
    let result01 = await add(10, 20);
    console.log("Sum:", result01);

    let result02 = await add(result01, 30);
    console.log("Total:", result02);
}

main();
console.log("****************************************");

