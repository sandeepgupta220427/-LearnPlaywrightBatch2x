import { BasePage } from "./01_BasePage.js";

export class LoginPage extends BasePage {
    constructor() {
        super("Login page");
    }
    login(user) {
        console.log(user + " logged in");
    }
}



