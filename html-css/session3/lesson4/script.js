  // console.log('++b = ', b)
        // console.log('--a = ', a)

        let x = 10 // number
        let y = 5
        // '10'
        // 10
        // x == 10
        // let x = 10 // number
        // let y = 5
        // // '10'
        // // 10
        // // x == 10

        console.log(x == '10') // true // typecast
        console.log(x != "10") // false 
        // console.log(x == '10') // true // typecast
        // console.log(x != "10") // false 

        console.log(x === '10') // false
        console.log(x !== '10') // true
        // console.log(x === '10') // false
        // console.log(x !== '10') // true

        console.log(x > y) // true
        console.log(x < y) // false
        console.log(x <= y) // false
        console.log(x >= y) // true
        // console.log(x > y) // true
        // console.log(x < y) // false
        // console.log(x <= y) // false
        // console.log(x >= y) // true


        // x === '10'

        // logical operators

        // AND = && = 1 false = false
        // true true = true
        // true false = false
        // false true = false
        // false false = false
        console.log(true && true) // true
        console.log(true && false) // false
        console.log(false && true) // false
        console.log(false && false) // false

        // OR = ||
        // true true = true
        // true false = true
        // false true = true
        // false false = false
        console.log(true || true) // true
        console.log(true || false) // false
        console.log(false || true) // false
        console.log(false || false) // false

        // NOT = !
        console.log(!false) // true


        let x = 5;
        let y = 10;
        let z = 2;

        console.log('AND: ', !(x > y) && (y > z) ) // false
        console.log('OR: ', (x > y) || (y > z) ) // true


        console.log('Example', ((z < y) && (x < z)) || (y > z) ) // true

        // !yes = no
        // !!yes = yes