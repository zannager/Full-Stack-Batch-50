// function displayDate() {
//     document.getElementById("demo").innerHTML = Date();
// }

// function demo2() {
//     document.getElementById("demo2").innerHTML = "here is the new paragraph";
//     document.getElementById("demo2").style.backgroundColor = 'red';
// }

// function printHelloWorld() {
//     document.getElementById("demo3").innerHTML = "Hello world.";
// }
// document.addEventListener("DOMContentLoaded", function() {
//     printHelloWorld();
// });

// let  x = 10;
// // Here x is 10

// {  
// let y = 2;
// }

// function demo4() {
//     return x;
// }
// console.log("Value of x:", demo4());

// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");

// Display the Array:
console.log(cars);

document.addEventListener("DOMContentLoaded", function() {
    let car = "Fiat";
    document.getElementById("demo6").innerHTML = car;
});

document.addEventListener("DOMContentLoaded", function() {
    try {
        adddlert("Welcome guest!");
    } catch (error) {
        document.getElementById("demo7").innerHTML = error.message;
    }
});

// x = 5; // Assign 5 to x

// elem = document.getElementById("demo8"); // Find an element 
// elem.innerHTML = x;           // Display x in the element

// var x; // Declare x

document.addEventListener('DOMContentLoaded', () => {
    var x = 6; // Declare and assign x
    var elem = document.getElementById("demo"); // Find an element 
    if (elem) {
        elem.innerHTML = x; // Display x in the element
    } else {
        console.error('Element not found');
    }
});

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  function myFunction() {
    const inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
      document.getElementById("demo10").innerHTML = inpObj.validationMessage;
    } else {
      document.getElementById("demo10").innerHTML = "Input OK";
    } 
  } 