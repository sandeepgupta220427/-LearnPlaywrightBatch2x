function greet() {
    console.log("Hi");
}
greet();
console.log("************************************");

function greet01() {
    console.log("Heloo");
}

let a = greet01();
console.log(a);
console.log("************************************");

// We can call afunction before defining the function
greet02();

function greet02() {
    console.log("Good Morning!");
}
console.log("************************************");

function greet03() {
    console.log("Heloo");
    return "Good Morning!"
}

let b = greet03();
console.log(b);
console.log("************************************");

function greet04(name) {
    return `Hello, ${name}!`;
}
// greet04("Pankaj");
console.log(greet04("Pankaj"));
console.log("************************************");

// Functions as a Expression
const greet05 = function (name) {
    return `Hi, ${name}!`;
}
console.log(greet05("Bob"));
console.log("************************************");

// Functions as a Expression
const greet06 = function (name) {
    return `Hello, ${name}!`;
}

// Arrow Functions
const greet07 = (name2) => `Hello, ${name2}!`;

console.log(greet06("Pankaj"));
console.log(greet07("Pankaj"));
console.log("************************************");

const doubleIt = n => n * 2;
console.log(doubleIt(10));
console.log("************************************");

const env = () => "Staging";
console.log(env());
console.log("************************************");

const getResult = (score) => {
    if (score >= 70) return "Pass";
    return "Fail";
}
console.log(getResult(90));
console.log(getResult(69));
console.log(getResult(70));
console.log("************************************");

function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    } else {
        console.log("Request is not Fine");
    }
}

validateStatusCode(201);
validateStatusCode(303);
validateStatusCode(200);
console.log("************************************");

const validateStatusCode01_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    } else {
        console.log("Request is not Fine");
    }
}
validateStatusCode01_Exp(200);
validateStatusCode01_Exp(404);
validateStatusCode01_Exp(202);
console.log("************************************");

const validateStatusCode01_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    } else {
        console.log("Request is not Fine");
    }
}
validateStatusCode01_Arrow(200);
validateStatusCode01_Arrow(404);
validateStatusCode01_Arrow(202);











