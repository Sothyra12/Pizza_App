"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var nextUser = 1;
var users = [
    { id: nextUser++, username: "Sothyra1", role: "admin" },
    { id: nextUser++, username: "Sothyra3", role: "contributor" },
];
function updateUser(id, updates) {
    var foundUsers = users.find(function (user) { return user.id === id; });
    if (!foundUsers) {
        console.error("User id not found!");
        return;
    }
    Object.assign(foundUsers, updates);
}
// updateUser(1, {username: "Sothyra111"});
// updateUser(2, {role: "member"});
function addNewUser(newUser) {
    var user = __assign({ id: nextUser++ }, newUser // omitted id - remaining properties are name & role
    );
    users.push(user);
    return user;
}
addNewUser({ username: "Kimsreng", role: "admin" });
console.log(users);
