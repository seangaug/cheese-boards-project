const {sequelize} = require('./db'); //import connection
const {User, Board, Cheese} = require('./index'); //import models

describe('User, Cheese, and Board models', () => {
    beforeAll(async () => {
        await sequelize.sync({force: true});
    });

    it('can create a User', async () => {
        const user1 = await User.create({
            name: 'John Doe',
            email: 'johndoe@email.com'
        });
        expect(user1.name).toBe('John Doe');
        expect(user1.email).toBe('johndoe@email.com');
    });

    it('can create a Cheese', async () => {
        const cheese1 = await Cheese.create({
            title: 'Cheddar',
            description: 'Aged cheddar cheese'
        });
        expect(cheese1.title).toBe('Cheddar');
        expect(cheese1.description).toBe('Aged cheddar cheese');
    });

    it('can create a Board', async () => {
        const board1 = await Board.create({
            type: 'Hard',
            description: 'A hard cheese board',
            rating: 5
        });
        expect(board1.type).toBe('Hard');
        expect(board1.description).toBe('A hard cheese board');
        expect(board1.rating).toBe(5);
    });
});