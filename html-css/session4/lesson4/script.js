// inheritance
        class Animal {
            constructor(name) {
                this.name = name;
            }

            speak() {
                console.log(`${this.name} makes a sound.`);
            }
        }

        class Dog extends Animal {
            constructor(name, breed) {
                super(name); // Calls the parent class constructor
                this.breed = breed;
            }

            speak() {
                console.log(`${this.name} barks!`);
            }
        }

        const myDog = new Dog('Buddy', 'Labrador');
        myDog.speak(); // Outputs: Buddy barks!
        console.log(myDog.breed); // Outputs: Labrador