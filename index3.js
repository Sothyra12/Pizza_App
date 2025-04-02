"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users2 = [
    { id: 1, username: "Sothyra1", role: "admin" },
    { id: 2, username: "Sothyra2", role: "member" },
    { id: 3, username: "Sothyra3", role: "contributor" },
];
function updateUser(id, updates) {
    var foundUsers = users2.find(function (user) { return user.id === id; });
    if (!foundUsers) {
        console.error("User id not found!");
        return;
    }
    Object.assign(foundUsers, updates);
}
updateUser(1, { username: "Sothyra111" });
updateUser(2, { role: "member" });
console.log(users2);
