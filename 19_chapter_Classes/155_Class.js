// Class -> blueprint to create objects (like a cookie cutter)
class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printName() {
        console.log("My name is " + this.name + " and age is " + this.age);
    }
}

// object = instance of the class
let pramod = new Person("Pramod", 35);
pramod.printName();

let garima = new Person("Garima", 30);
garima.printName();
