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

export {}


