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
        // console.log(this.getUserList(user.room).includes(user.name));
        if (this.getUserList(user.room).includes(user.name)) {
            return 'This username is taken, please use another';
        }
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

// let users = new Users();
// users.addUser('1', 'test','test');
// users.addUser('2', 'test','test');
// // users.addUser(user1);
// // users.addUser(user2);
// console.log(users.getUserList('test'))


module.exports = {Users};
