let myName: string = "JuJu";
let numberOfCows: number = 5;
let isStudent: boolean = false;

// Custom Types
type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address?: Address
}

let person1: Person = {
    name: "Ju",
    age: 20,
    isStudent: false,
    address: {
        street: "55 Ann O'Reilly Road",
        city: "North York",
        country: "Canada"
    }
}

let person2: Person = {
    name: "Ra",
    age: 27,
    isStudent: false,
}
