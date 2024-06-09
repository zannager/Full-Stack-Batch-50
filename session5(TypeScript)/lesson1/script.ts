interface Person {
    name: string,
    age: number
    gender: Gender
}

enum Gender {
    Male,
    Female
}

let person: Person = {
    name: 'Alice',
    age: 4,
    gender: Gender.Male
}

console.log(person)