const {User} = require('./User');
const {Board} = require('./Board');
const {Cheese} = require('./Cheese');

// Users/Boards Association
Board.belongsTo(User);
User.hasMany(Board);

// Boards/Cheeses Association
Board.belongsToMany(Cheese, {through: 'BoardCheese'});
Cheese.belongsToMany(Board, {through: 'BoardCheese'});

module.exports = {
    User,
    Board,
    Cheese,
};