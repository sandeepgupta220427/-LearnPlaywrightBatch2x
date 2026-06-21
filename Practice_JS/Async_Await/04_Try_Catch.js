// Error Handling => try/catch

// With Promise you use .catch()
// With async/await you can use try/catch => exactly like regular JavaScript error handling.

async function testAPI() {
    try {
        let result = await Promise.reject("503 Service Unavailable")
        console.log("This is from try block: ", result);

    } catch (error) {
        console.log("This is from catch block: ", error);
    } finally {
        console.log("Clean up!!");
    }
}

testAPI();
// try/catch/finally maps directly to .then()/.catch()/.finally() => Same logic clear Syntax`
console.log("******************************************");

async function testAPI02() {
    try {
        let result01 = await Promise.resolve("200 All Ok")
        let result02 = await Promise.reject("503 Service Unavailable")
        console.log("This is from try block: ", result01);
        console.log("This is from try block: ", result02);

    } catch (error) {
        console.log("This is from catch block: ", error);
    }
}

testAPI02();
console.log("******************************************");

async function testAPI03() {
    try {
        let result01 = await Promise.resolve("200 All Ok")
        console.log("This is from try block: ", result01);

    } catch (error) {
        console.log("This is from catch block: ", error);
    }
}

testAPI03();
