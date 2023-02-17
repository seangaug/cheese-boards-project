const {sequelize} = require('./db'); //import connection
const {User, Board, Cheese} = require('./index'); //import models

describe('User, Cheese, and Board models', () => {
    beforeAll(async () => {
        await sequelize.sync({force: true});
    });

    test('can create a User', async () => {
        const user1 = await User.create({
            name: 'John Doe',
            email: 'johndoe@email.com'
        });
        expect(user1.name).toBe('John Doe');
        expect(user1.email).toBe('johndoe@email.com');
    });

    test('can create a Cheese', async () => {
        const cheese1 = await Cheese.create({
            title: 'Cheddar',
            description: 'Aged cheddar cheese'
        });
        expect(cheese1.title).toBe('Cheddar');
        expect(cheese1.description).toBe('Aged cheddar cheese');
    });

    test('can create a Board', async () => {
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

describe('User, Cheese, and Board associations', () => {
    beforeAll(async () => {
        await sequelize.sync({force: true});
    });

    test('can associate a User with a Board', async () => {
        const user2 = await User.create({
            name: 'Thomas Barker',
            email: 'tombarker@email.com'
        });
        const board2 = await Board.create({
            type: 'Soft',
            description: 'A soft cheese board',
            rating: 4
        });

        //add board2 to user2
        await user2.addBoard(board2);

        //get all boards associated with user2
        const userBoards = await user2.getBoards();

        //check that userBoards is an array
        expect(userBoards[0].type).toBe('Soft');
        expect(userBoards[0].description).toBe('A soft cheese board');
        expect(userBoards[0].rating).toBe(4);
    });

    test('can create board with multiple cheeses and vice versa', async () => {
        const board3 = await Board.create({
            type: 'Hard',
            description: 'A hard cheese board',
            rating: 5
        });
        const cheese2 = await Cheese.create({
            title: 'Brie',
            description: 'A soft cheese'
        });
        const cheese3 = await Cheese.create({
            title: 'Gouda',
            description: 'A hard cheese'
        });

        //add cheese2 and cheese3 to board3
        await board3.addCheese(cheese2);
        await board3.addCheese(cheese3);

        //get all cheeses associated with board3
        const boardCheeses = await board3.getCheeses();

        //check that boardCheeses is an array
        expect(boardCheeses[0].title).toBe('Brie');
        expect(boardCheeses[0].description).toBe('A soft cheese');
        expect(boardCheeses[1].title).toBe('Gouda');
        expect(boardCheeses[1].description).toBe('A hard cheese');
    });
});