class Student {
    static collegeName = "PW AT Batch";

    constructor(name) {
        this.name = name;
    }

    static display() {
        console.log(this.name + " are part of the ", Student.collegeName);
    }
}

let pankaj = new Student("pankaj");
let miti = new Student("miti");
let sumu = new Student("sumu");
let padmini = new Student("padmini");

console.log(Student.collegeName);
console.log(pankaj.name);
console.log(miti.name);
console.log(sumu.name);
console.log(padmini.name);
