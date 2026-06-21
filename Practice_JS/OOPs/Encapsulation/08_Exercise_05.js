// ### Exercise 5: Private Field

class Token {
    #value;

    constructor(val) {
        this.#value = val;
    }

    getToken() {
        return this.#value;
    }

    getMasked() {
        return "***" + this.#value.slice(-4);
    }
}

let t = new Token("abcdef1234");
console.log(t.getMasked());
console.log(t.getToken());
console.log(t.value);