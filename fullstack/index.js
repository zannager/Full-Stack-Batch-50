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

// let createBlog = (title, body) => {
//     if(!title) {
//         throw new Error('a title is required');
//     }
//     if(!body) {
//         throw new Error('body cant be empty');
//     }
//     return  alert(`${title} - ${body}`);
// }

// createBlog('blog title', 'blog body');

// let nepal = {
//     //add property
//     mountains: ['everest', 'fish tail', 'annaputa'],
//     //add method
//     // printWithDash: function() {
//     //     setTimeout(function(){
//     //         console.log(this.mountains.join(" - "))
//     //     }, 3000);
//     printWithDash: function() {
//         setTimeout(() => console.log(this.mountains.join(' - ')), 3000);
//     }
// }

// // alert(nepal.mountains);
// nepal.printWithDash();

//desctructuring
// let thingsToDo = {
//     morning: 'exercise',
//     afternoon: 'work',
//     evening: 'code',
//     night: ['sleep', 'dream']
// }

// let {morning, afternoon} = thingsToDo;
// morning = 'run';
// console.log(morning, ' - ', afternoon);

// let uniStudent = (student) => {
//     // console.log(`${student.name} from ${student.university}`)
//     let {name, university} = student;
//     console.log(`${name} from ${university}`)
// }

// let uniStudent = ({name, university}) => {
//     console.log(`${name} from ${university}`)
// }
// uniStudent({
//     name: 'ryan',
//     university: 'university of baguio'
// })

// let [, firstMountain] = ['everest', 'fish tail', 'annaputa'];
// console.log(firstMountain);

//restructuring
// var name = 'everest';
// var height = 8848;
// var output = function() {
//     console.log(`Mt. ${this.name} is ${this.height} meter tall`);
// }

// var adventureClimbing = {name, height, output};
// adventureClimbing.output();



// var adventureClimbing = {
//     name: 'everest',
//     height: 8848,
//     output() {
//     console.log(`Mt. ${this.name} is ${this.height} meter tall`)
// }
// };
// adventureClimbing.output();

// //spread operators
// var mountains = ['everest', 'fist tail', 'annapura'];
// var mountainsFromJapan = ['fuji'];

// var allMountains = [...mountains, ...mountainsFromJapan];
// console.log(allMountains);

// var day = {
//     breakfast: 'toast with milk',
//     lunch: 'rice with chicke curry'
// }

// var night = {
//     dinner: 'noodle'
// }

// var wholeDay = {...day, ...night};

// console.log(wholeDay);

// //rest operators

// var rivers = ['sunksi', 'tankosi', 'saptosk'];
// var [first, ...rest] = rivers;

// console.log(first);
// console.log(rest);


//classes

// function Holiday(destination, days) {
//     this.destination = destination
//     this.days = days
// }

// // Holiday.prototype.info = function() {
// //     console.log(this.destination + " I " + this.days + " days");
// // }

// var nepal = new Holiday('nepal', 30);
// // console.log(nepal.info())

// //or in ES6


class Holiday { //parent class
    constructor(destination, days) {
        this.destination = destination
        this.days = days
    }

    info() {
        console.log(`${this.destination} will take ${this.days} days`)
    }
}
const trip = new Holiday('nepal', '30');
console.log(trip.info());

class Expedition extends Holiday {//sub class
    constructor(destination, days, gear) {
        super(destination, days);
        this.gear = gear;
    }

    info() {
        super.info();
        console.log(`bring your ${this.gear.join(' and your')}`);
    }
}

const tripWithGear = new Expedition('everest', 30, ['sunglases', 'flags', 'camera']);
tripWithGear.info();
