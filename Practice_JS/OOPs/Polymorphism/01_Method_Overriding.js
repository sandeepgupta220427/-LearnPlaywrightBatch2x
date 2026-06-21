class BaseTest {
    setup() {
        console.log("Base: open Browser");
    }
}

class APITest extends BaseTest {
    setup() {
        console.log("API Test: open browser");
    }
}

let test = new APITest();
test.setup(); // whoever object is present, it will call that.

