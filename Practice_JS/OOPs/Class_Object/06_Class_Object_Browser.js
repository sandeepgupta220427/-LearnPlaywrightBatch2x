class TestCase {

    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display() {
        console.log(this.name + " => " + this.status + " => " + this.priority);
    }
}

// let objectRefrence = new Object(........)
let loginTest_ref = new TestCase("Login Test", "PASS", "P0");
let signupTest_ref = new TestCase("Signup Test", "FAIL", "P1");

loginTest_ref.display();
signupTest_ref.display();

// Function vs Method
// method is functions but inside the class