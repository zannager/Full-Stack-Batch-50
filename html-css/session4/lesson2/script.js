// encapsulation
class Person {
    constructor(name, age) {
        this.name = name;
        this._age = age;
        this._isAdult = age >= 18; //encapsulated property
    }

    get isAdult() {
        return this._isAdult; // encapsulated getter method
    }

    set isAdult(value) {
        throw new Error ("isAdult is a derived property and cannot be modified");
    }

    get age() {
        return this._age; // encapsulated getter method
    }

    set age(value) {
        throw new Error ("age is a derived property and cannot be modified");
    }

    sayHello() {
        console.log(`Hello, my name is $(this.name).`)
    }
}

const john = new Person("John Doe", 25);
john._age = 31;
console.log(john.age);