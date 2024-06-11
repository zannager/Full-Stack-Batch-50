// var name = 'ryan';
// name = 'zen';
// alert(name);




// if (true) {
//     let name = 'ryan';
//     alert(name);
// }

// let fname = 'ryan';
// let lname = 'd';
// let age = prompt("guess ryan's age..");

// let result =`${fname} ${lname} is ${age} years old`;
// alert(result);

// function welcome(user, message){
//     alert(`Hello ${user}, ${message}`);
// }
// welcome("ryan", "good morning");

//arrow functions
// function greeting(message) {
//     return alert(`${message} everyone`);
// }

// let greeting = (message) => {alert(`${message} everyone`)}

// greeting('goodmorning');

let createBlog = (title, body) => {
    if(!title) {
        throw new Error('a title is required');
    }
    if(!body) {
        throw new Error('body cant be empty');
    }
    return  alert(`${title} - ${body}`);
}

createBlog('blog title', 'blog body');