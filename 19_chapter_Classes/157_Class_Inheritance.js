// A child class reuses everything from the parent -> extends
class BaseTest {
    constructor(testName) {
        this.testName = testName;
    }

    start() {
        console.log("Starting test: " + this.testName);
    }
}

class LoginTest extends BaseTest {
    constructor(testName, user) {
        super(testName);      // call the parent constructor first
        this.user = user;
    }

    login() {
        console.log(this.user + " is logging in...");
    }

    // method overriding -> child version wins
    start() {
        super.start();
        console.log("Login setup done");
    }
}

let t = new LoginTest("Verify login", "pramod");
t.start();
t.login();
