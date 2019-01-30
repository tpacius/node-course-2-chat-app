// [{
//     id: ,
//     name: ,
//     room:
// }]

class Users {
    constructor() {
        this.users = [];
    }
    addUser(id, name, room) {
        let user = {id, name, room};
        this.users.push(user);
        return user;
    }
    removeUser(id) {
        let user = this.users.filter((user) => user.id === id)[0];
        if (user) {
            this.users = this.users.filter((user) => user.id !== id);
        }
        return user;
    }

    getUser(id) {
        let user = this.users.filter((user) => user.id === id);
        return user[0];
    }

    getUserList(room) {
        let users = this.users.filter((user) => user.room === room);
        let names = users.map((user) => user.name);
        return names;
    }
}

// class User {
//     constructor(id, name, room) {
//         this.id = id;
//         this.name = name;
//         this.room = room;
//     }
//     // addUser
// }

module.exports = {Users};

//addUser (id, name, room)

//removeUser(id)

//getUser(id)

//getUserList(room)