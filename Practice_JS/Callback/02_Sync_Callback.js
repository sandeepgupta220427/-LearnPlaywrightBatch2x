/*Synchronous Callbacks
- Synchronous = runs immediately, line by line, top to bottom.  (UPI/IMPS)
- The program WAITS for it to finish before moving to the next line.

Every forEach, **map**, **filter** you've used — those are sync callbacks.
*/

let testResults = ["PASS", "FAIL", "PASS", "SKIP"];

testResults.forEach(function (result, index) {
    console.log("Test" + index + " => " + result);
});
console.log("****************************************");

function test(text, callback) {
    console.log("Hi, this is test");
    callback();
}

// Callback by ananomus function
test('Verify the login page is working', function () {
    console.log("Running TC01");
})

// Callback by arrow function
test('Verify the login page is working', () => {
    console.log("Running TC02");
})
console.log("*******************************************************");

// Practice Examples
console.log("Example 01")
/*
The Element Clicker (Basic Execution)
Problem Statement: Write a function called clickElement that takes two arguments: an element name (string) and a callback function.
The clickElement function should log "Clicking on: [elementName]" and then immediately execute the callback function.
*/
function clickElement(elementName, callback) {
    console.log(`Clicking on: ${elementName}`);
    callback();
}

// Example Usage:
clickElement("Submit Button", () => {
    console.log("Success: Click action verified!");
});
console.log("*******************************************************");

console.log("Example 02")
/*
UI Status Checker (Passing Data to Callback)
Problem Statement: Create a function checkElementStatus that accepts an element ID and a callback.
Inside the function, define a hardcoded status variable (e.g., "Visible").
Pass this status into the callback function so the callback can print: "The element status is Visible".
*/
function checkElementStatus(elementId, callback) {
    const status = "Visible"; // Simulating a quick DOM check
    callback(status);
}

// Example Usage:
checkElementStatus("#username-input", (elStatus) => {
    console.log(`The element status is ${elStatus}`);
});
console.log("*******************************************************");

console.log("Example 03")
/*
Test Data Sanitizer (Transforming Strings)
Problem Statement: When scraping text from a webpage, you often get extra whitespace.
Write a function sanitizeText that takes a raw string and a callback.
The function should trim the whitespace and pass the clean string to the callback for validation.
*/
function sanitizeText(rawText, callback) {
    const cleanText = rawText.trim();
    callback(cleanText);
}

// Example Usage:
sanitizeText("   Welcome Admin!   ", (finalText) => {
    console.log(`Validated Text: ${finalText === "Welcome Admin!"}`); // true
});
console.log("*******************************************************");

console.log("Example 04")
/*
Custom Filter for Locator Lists
Problem Statement: Playwright often returns lists of elements.
Write a function filterElements that takes an array of element text strings and a callback function.
The callback should act as a condition (returning true or false). The main function should return a new array containing only the elements that match the condition.
*/
function filterElements(elementsArray, callback) {
    const matchedElements = [];
    for (let el of elementsArray) {
        if (callback(el)) {
            matchedElements.push(el);
        }
    }
    return matchedElements;
}

// Example Usage (Filtering out broken links):
const links = ["/home", "/dashboard", "/broken-link", "/settings"];
const validLinks = filterElements(links, (link) => !link.includes("broken"));

console.log(validLinks); // ['/home', '/dashboard', '/settings']
console.log("*******************************************************");

console.log("Example 05")
/*
API Response Mock Reporter
Problem Statement: Write a function processResponse that accepts a status code (number) and two callbacks:
onSuccess and onFailure. If the status code is 200, execute onSuccess. If it's anything else, execute onFailure.
*/
function processResponse(statusCode, onSuccess, onFailure) {
    if (statusCode === 200) {
        onSuccess();
    } else {
        onFailure();
    }
}

// Example Usage:
processResponse(
    200,
    () => console.log("Test Passed: Page loaded successfully."),
    () => console.log("Test Failed: Triggering screenshot capture...")
);







