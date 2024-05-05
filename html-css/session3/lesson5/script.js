//falsy

console.log(false);
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();

if (false) {
    console.log("hello world");
}

let a = 10;
let b = 2;

if (a > b) {
    console.log("a is less than b");
}

else if (b > a) {
    console.log("b is greater than a");
}

else {
    console.log("no condition above is true");
}

let answer = "a";

switch (answer) {
    case "a":
        console.log("correct");
        break;
    case "b":
        console.log("incorrect");
        break;
    default:
        console.log("none of the above");
}