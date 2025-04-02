// Utility Types & Partial
type User2 = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

type UpdatedUser2 = Partial<User2>

const users2: User2[] = [
    {id: 1, username: "Sothyra1", role: "admin"},
    {id: 2, username: "Sothyra2", role: "member"},
    {id: 3, username: "Sothyra3", role: "contributor"},
]

function updateUser(id: number, updates: UpdatedUser2) {
    const foundUsers = users2.find(user => user.id === id);

    if (!foundUsers) {
        console.error("User id not found!");
        return
    } 

    Object.assign(foundUsers, updates);
}

updateUser(1, {username: "Sothyra111"});
updateUser(2, {role: "member"});

console.log(users2);



// Omit Utility Type

export {}



