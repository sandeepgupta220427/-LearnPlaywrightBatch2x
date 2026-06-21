class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating");
    }

    sleep() {
        console.log(this.name + " is sleeping");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // It is used for the parent constructor. 
        this.breed = breed;
    }

    bark() {
        console.log(this.name, " is barking!");
    }
}

let dog = new Dog("Rex", "Labrador");
dog.eat();
dog.sleep();
dog.bark();
console.log(dog.breed);

// Super - Keyword -  it will basically help you to call the constructor of the parent,
// as well as the variables of the parent, as well as the functions of the parent

// **Key Rules:**
// - `extends`  → makes a child class
// - `super()`  → calls the parent's constructor (MUST be first line in child constructor)
// - Child gets ALL parent methods automatically
console.log("**********************************************");


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " makes a sound");
    }
}

class Dog extends Animal {
    bark() {
        console.log(this.name + " barks");
    }
}

let d = new Dog("Rex");
d.speak();
d.bark();

