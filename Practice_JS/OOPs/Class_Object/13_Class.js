class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi, I am ${this.name}`);
    }
}

const student1 = new Student("Pankaj", 27);
console.log(student1);
console.log(student1.name);
console.log(student1.age);

student1.introduce();

const student2 = new Student("Virat", 21);
console.log(student2);
console.log(student2.name);
console.log(student2.age);

student2.introduce();
console.log("****************************************************");

class Mobile {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    showDetails() {
        console.log(`${this.brand} cost Rs.${this.price}`);
    }
}

const mobile1 = new Mobile("Iphone", 100000);
console.log(mobile1);
console.log(mobile1.brand);
console.log(mobile1.price);

mobile1.showDetails();


const mobile2 = new Mobile("Vivo", 50000);
console.log(mobile2);
console.log(mobile2.brand);
console.log(mobile2.price);

mobile2.showDetails();
console.log("****************************************************");


