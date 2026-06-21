// Private Fields (#) => Hidden Data
// Public Fields

class Creadentials {
    #apikey;

    constructor(user, key) {
        this.user = user; //public
        this.#apikey = key //private
    }

    // Custome made method
    getAuthHeader() {
        return "Bearer " + this.#apikey;
    }
}

let cred = new Creadentials("admin", "scret_key_1234");
console.log(cred.user);

//console.log(cred.apikey); // Undefined
//console.log(cred.#apikey); // This is not allowed it gvives error

console.log(cred.getAuthHeader());

// cred.apiKey is undefined => (it doesn't exist).
// cred.#apiKey would throw a SyntaxError.
// The ONLY way to access it is through the public method getAuthHeader()
