const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Earl',
            room: 'Solitude'
        },
        {
            id: '2',
            name: 'Tyler',
            room: 'Trolling'
        },
        {
            id: '3',
            name: 'Frank',
            room: 'Solitude'
        }];
    });


    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: 12345,
            name: "Testing",
            room: "The room"
        }
        let res = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        let user = users.removeUser('1');
        expect(user.id).toBe('1');
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        let user = users.removeUser('5');
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should fetch user', () => {
        let res = users.getUser('1');
        expect(res).toEqual(
            {            
                id: '1',
                name: 'Earl',
                room: 'Solitude'
            });
    });

    it('should not fetch a user', () => {
        let res = users.getUser('5');
        expect(res).toBeFalsy();
    });

    it('should get all users in room Solitude', () => {
        let userList = users.getUserList('Solitude');
        expect(userList).toEqual(['Earl', 'Frank']);
    });

    it('should get all users in room Trolling', () => {
        let userList = users.getUserList('Trolling');
        expect(userList).toEqual(['Tyler']);
    });
});