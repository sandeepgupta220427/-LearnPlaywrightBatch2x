function name() {
    console.log("Hi");
};
name();
console.log("************************************");

// Immediately Invoked Functions Expression (IIFE)
// Most of IIFE does not have name

(function () {
    console.log("Hi");
})();
console.log("************************************");

(function () {
    console.log("Staging");
})();
console.log("************************************");

(() => {
    console.log("Setup Completed!")
}
)();




