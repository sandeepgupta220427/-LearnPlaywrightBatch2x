class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
    tearDown() {
        console.log("Base: close browser");
    }
}

class UITest extends BaseTest {
    setup() {
        super.setup();// UITest will help you to call your parent function, super() => Constructor, super.fname => function name
        console.log("UI: maximise the window");
    }

    tearDown() {
        console.log("UI: take screenshot");
        super.tearDown();
    }
}

let test = new UITest();
test.setup();
console.log("*************");
test.tearDown();

