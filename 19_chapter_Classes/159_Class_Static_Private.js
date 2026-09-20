class Config {
    // static -> belongs to the class itself, not the object
    static env = "staging";

    // private -> # makes it accessible only inside this class
    #apiKey = "secret-key-123";

    static getEnv() {
        return Config.env;
    }

    getKey() {
        return this.#apiKey;   // works inside the class
    }
}

console.log(Config.getEnv());       // call on class name
console.log(Config.env);

let c = new Config();
console.log(c.getKey());

// console.log(c.#apiKey);          // SyntaxError - private, cannot access outside
// console.log(c.getEnv());         // TypeError - static not on the object
