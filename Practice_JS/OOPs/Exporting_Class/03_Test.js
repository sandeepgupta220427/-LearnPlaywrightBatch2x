import { LoginPage } from "./02_LoginPage.js";

let page = new LoginPage();
page.open();
page.login("admin");

// This will be used many times in Playwright => Exporting and Importing Classes Between Files


