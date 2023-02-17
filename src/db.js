//create new sequelize connection

const { Sequelize } = require('sequelize'); //Object destructuring. PUlling out key of Sequ
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite') // join locations of the file
});

module.exports = sequelize; //export connection to be used elsewhere