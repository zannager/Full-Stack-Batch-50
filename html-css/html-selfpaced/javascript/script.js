function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

function demo2() {
    document.getElementById("demo2").innerHTML = "here is the new paragraph";
    document.getElementById("demo2").style.backgroundColor = 'red';
}

function printHelloWorld() {
    document.getElementById("demo3").innerHTML = "Hello world.";
}
document.addEventListener("DOMContentLoaded", function() {
    printHelloWorld();
});

let  x = 10;
// Here x is 10

{  
let y = 2;
// Here x is 2
}

// Here x is 2
function demo4() {
    return x;
}
console.log("Value of x:", demo4());