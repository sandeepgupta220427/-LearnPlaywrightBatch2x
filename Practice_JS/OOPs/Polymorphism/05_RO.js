class Report {
    generate(data) {
        console.log("Raw data: " + data);
    }
}

class HTMLReport extends Report {
    generate(data) {
        console.log("<html><body>" + data + "</body></html>");
    }
}

class JSONReport extends Report {
    generate(data) {
        console.log('{"report": "' + data + '"}');
    }
}

class TextReport extends Report {
    generate(data) {
        console.log("=== REPORT ===\n" + data + "\n==============");
    }
}

let reports = [new HTMLReport(), new JSONReport(), new TextReport()];

reports.forEach(function (r) {
    r.generate("5 tests passed, 1 failed");
    console.log("**********");
})

//### **Exercise 3: Method Overriding — Complete Replace**
class Shape {
    area() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.w = w;
        this.h = h;
    }

    area() {
        return this.w * this.h;
    }
}

let r = new Rectangle(5, 3);
console.log("Area:", r.area());
//### **Exercise 4: Method Override with super.method()**
class Base {
    greet() {
        return "Hello";
    }
}

class Child extends Base {
    greet() {
        return super.greet() + " World";
    }
}

console.log(new Child().greet());

//### **Exercise 5: instanceof Check**

class Vehicle { }
class Car extends Vehicle { }
class Tesla extends Car { }

let t = new Tesla();

console.log(t instanceof Tesla);
console.log(t instanceof Car);
console.log(t instanceof Vehicle);
console.log(t instanceof Object);

