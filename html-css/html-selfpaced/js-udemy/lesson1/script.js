let message = "Hello World";
message = 4;
alert (message);

// function hw() {
//     return "Hello, World!";
// }

// // Call the function and store the returned value
// let message = hw();

// // Output the returned value to an HTML element
// document.addEventListener('DOMContentLoaded', () => {
//     var element = document.getElementById("output");
//     if (element) {
//         element.innerHTML = message;
//     } else {
//         console.error("Element with id 'output' not found.");
//     }
// });

function isLeapYear(year) {
    if (year % 400 == 0) {
        return true;
    } else if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }
}
