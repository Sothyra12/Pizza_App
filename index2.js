var myName = "JuJu";
var numberOfCows = 5;
var isStudent = false;
var person1 = {
    name: "Ju",
    age: 20,
    isStudent: false,
    address: {
        street: "55 Ann O'Reilly Road",
        city: "North York",
        country: "Canada"
    }
};
var person2 = {
    name: "Ra",
    age: 27,
    isStudent: false,
};
// Array Types
var person3 = {
    name: "Sothyra",
    age: 20,
    isStudent: true
};
var person4 = {
    name: "Kimsreng",
    age: 27,
    isStudent: false
};
var people = [person3, person4];
/*
- Generics Syntax: Array<Person>   e.g. let people:  Array<Person> = [person3, person4];
*/
// Literal Types
/*
- Much commonly found when paired literal types with union types
*/
var myName2 = "ju";
var userRole = "member";
// Function return types
var users = [
    { username: "juju", role: "admin" },
    { username: "juju", role: "admin" },
    { username: "juju", role: "admin" },
    { username: "juju", role: "admin" },
    { username: "juju", role: "admin" },
];
function fetchUserDetails(username) {
    var user = users.find(function (user) { return user.username === username; });
    if (!user) {
        throw new Error("User with username ".concat(username, " not found!"));
    }
    return user;
}
// Any type
// - decreases (turn off) the type checking in TS
var countryOfBirth = "Cambodia"; // can be reassign in other types besides string
var users2 = [
    { id: 1, username: "Sothyra1", role: "admin" },
    { id: 2, username: "Sothyra2", role: "member" },
    { id: 3, username: "Sothyra3", role: "contributor" },
];
function updateUser(id, updates) {
    var foundUsers = users2.find(function (userId) { return userId.id === id; });
    if (!foundUsers) {
        console.error("User id not found!");
    }
    else {
        Object.assign(updates, foundUsers);
    }
}
