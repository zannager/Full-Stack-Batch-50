function printHelloWorld10x() {
    console.log("hellow world");
    console.log("hellow world");
    console.log("hellow world");
    console.log("hellow world");
    console.log("hellow world");
    
}

printHelloWorld10x();
printHelloWorld10x();

function greetings(name) {
    console.log(`hello ${name}`)
}

greetings("roy")

function greetings(name) {
    return `hello ${name}`;
}

console.log(greetings("greg"));

let val = greetings("juan")
console.log(val)

function sum(x, y) {
    return x + y
}
console.log(sum(1,2));