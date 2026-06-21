class Car {
    //Attribute
    //Constructor

    constructor(assigned_name) {
        this.name = assigned_name;
    }

    drive() {
        console.log("Drive the car: " + this.name);
    }

    printDatailsCar() {
        console.log("Details of the car: " + this.name);
    }
}

let tesla = new Car("tesla model v3");
tesla.drive();
tesla.printDatailsCar();