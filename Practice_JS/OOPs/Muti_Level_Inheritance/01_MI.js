// Grand Father -> Father -> Son
// BasePage -> AuthPape -> AdminPage

class BasePage {
    constructor(name) {
        this.name = name;
    }
    open() {
        console.log("[OPEN] " + this.name);
    }
}

class AuthPage extends BasePage {
    login(user) {
        console.log("[LOGIN] " + user);
    }
}

class AdminPage extends AuthPage {
    constructor() {
        super("Admin panel");
    }
    manageUsers() {
        console.log("[ADMIN] managing users");
    }
}

let admin = new AdminPage();

admin.open();
admin.login("SuperAdmin");
admin.manageUsers();


//### **Exercise 2: super() Calls Parent Constructor**
class Vehicle {
    constructor(type) {
        this.type = type;
        console.log("Vehicle: " + type);
    }
}

class Car extends Vehicle {
    constructor(brand) {
        super("Car");
        this.brand = brand;
        console.log("Brand: " + brand);
    }
}

let c = new Car("Tesla");
