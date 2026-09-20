// IQ: What will be printed and in what order?
class A {
    constructor() {
        console.log("A constructor");
    }
    hello() {
        console.log("hello from A");
    }
}

class B extends A {
    constructor() {
        super();
        console.log("B constructor");
    }
    hello() {
        console.log("hello from B");
    }
}

let obj = new B();   // A constructor, then B constructor
obj.hello();         // hello from B (child override wins)

// typeof a class is still "function"
console.log(typeof A);

// classes are NOT hoisted like function declarations (TDZ applies)
// new C();          // ReferenceError
// class C {}
