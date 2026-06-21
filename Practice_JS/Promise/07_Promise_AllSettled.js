// This is like a test report — you want results for ALL tests, not just stop at the first failure.

Promise.allSettled([
    Promise.resolve("Test A passed"),
    Promise.reject("Test B failed"),
    Promise.resolve("Test C passed"),
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
    });
});

