/*
### Asynchronous Callbacks ()
Asynchronous = "I'll do this later, you carry on."

**Real-world QA example:** When you send an API request,
you don't freeze your entire test suite waiting for the response.
The request goes out, your code continues, and when the response arrives, THEN the callback runs.

To simulate async behavior in plain JS, we use `setTimeout(callback, milliseconds)`. 

Think of it as setting an alarm — "run this function after X milliseconds."
*/

console.log(" Test 01: Started");

// This is Async callback
setTimeout(function () {
    console.log("Test 02: API response recived!");
}, 2000); // ← appears after 2 seconds

console.log("Test 03: Moving to next test");
