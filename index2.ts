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


// Array Types
let person3: Person = {
    name: "Sothyra",
    age: 20,
    isStudent: true
}

let person4: Person = {
    name: "Kimsreng",
    age: 27,
    isStudent: false
}

let people: Person[] = [person3, person4];
/*
- Generics Syntax: Array<Person>   e.g. let people:  Array<Person> = [person3, person4];
*/


// Literal Types
/*
- Much commonly found when paired literal types with union types
*/
const myName2 = "ju";


// Union Types
type User = {
    username:  string
    role:  "guest" | "member" | "admin"
}
type UserRole = "guest" | "member" | "admin";
let userRole: UserRole = "member";


// Function return types
const users: User[] = [
    { username: "juju", role: "admin"},
    { username: "juju", role: "admin"},
    { username: "juju", role: "admin"},
    { username: "juju", role: "admin"},
    { username: "juju", role: "admin"},
];

function fetchUserDetails(username: string): User {
    const user = users.find((user) => user.username === username);
    if (!user) {
        throw new Error(`User with username ${username} not found!`);
    }
    return user;
}


// Any type
// - decreases (turn off) the type checking in TS
let countryOfBirth: any = "Cambodia"; // can be reassign in other types besides string


// Unknown type