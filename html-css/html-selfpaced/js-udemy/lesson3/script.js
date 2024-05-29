// for (let i=1; i<=10; i++) {
//     console.log(i);
// }

// for (let i=1; i<=10; i++) {
//     if (i==6) {
//         break;
//     }
//     console.log(i);
// }

for (let i=1; i<=10; i++) {
    if (i==8) {
        continue;
    }
    console.log(i);
}

function is_integer(number) {
    return Number.isFinite(number) && Math.floor(number) === number;
}

// function is_integer(number) {
//     // Check if the number is a finite number
//     if (typeof number !== 'number' || isNaN(number) || !isFinite(number)) {
//         return false;
//     }
    
//     // Check if the floor value of the number is equal to the original number
//     return Math.floor(number) === number;
// }

function add_all(arr) {
    let sum = 0;
    arr.forEach(function(number) {
        sum += number;
    });
    return sum;
}

let book = {title: "the book", author: "booker"};
for (let p in book) {
    console.log(p);
}
book.valueOf();