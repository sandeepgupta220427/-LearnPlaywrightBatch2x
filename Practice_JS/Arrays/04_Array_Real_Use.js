let browser = ["chrome", "safari", "edge", "opera", "firefox"];
console.log(browser.length);
console.log(browser);
console.log('********************************************');

browser.pop();
console.log(browser);
console.log('********************************************');

let removed = browser.shift();
// browser.shift();
console.log(browser);
console.log(removed);
console.log('********************************************');

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera is removed from Selenium");
    }
}