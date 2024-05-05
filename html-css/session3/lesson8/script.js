//  objects
        // declare
        let person = {
            name: 'john',
            age: '18',
            address: 'pasig',
            gender: 'male'
        }
        let car = {
            "plate-number": '0082nas',
            drive: function (){
                console.log('driving...')
            }
        }


        // access dot notation
        // access dot notation
        console.log(person)
        console.log(person.name)
        console.log(person.age)

        // access bracket notation
        console.log(person["name"])
        console.log(person["age"])

        console.log(car["plate-number"])

        car.drive();
        car["drive"]();