// Utility Types & Partial
type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

type UpdatedUser = Partial<User>

let nextUser = 1;

const users: User[] = [
    {id: nextUser++, username: "Sothyra1", role: "admin"},
    {id: nextUser++, username: "Sothyra3", role: "contributor"},
]

function updateUser(id: number, updates: UpdatedUser) {
    const foundUsers = users.find(user => user.id === id);

    if (!foundUsers) {
        console.error("User id not found!");
        return
    } 

    Object.assign(foundUsers, updates);
}

// updateUser(1, {username: "Sothyra111"});
// updateUser(2, {role: "member"});


// Omit Utility Type
function addNewUser(newUser: Omit<User, "id">): User {
    const user: User = {
        id: nextUser++,
        ...newUser // omitted id - remaining properties are name & role
    }
    users.push(user);
    return user;
}

addNewUser({username: "Kimsreng", role: "admin"});
console.log(users);


// Generics
const gameScores = [1, 2, 3, 4, 5, 6];
const favToys = ["stuffed animal", "stuffed anime character", "tedy bear"];
const personalInfo = [{name: "JuJu", age: 20}, {name: "Kimsreng", age: 27}];

// array parameter can be of any types - Generics come in handy here in this case
// getLastItem<Type> -> Type or T is just the given name
function getLastItem<Type>(array: Type[]): Type | undefined {
    return array[array.length - 1];
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favToys));
console.log(getLastItem(personalInfo));

export {}