//create new sequelize connection

const { Sequelize, Model } = require('sequelize'); //Object destructuring. Pulling out key of Sequ
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite') // join locations of the file
});

module.exports = {
    sequelize,
    Sequelize
}; //export connection to be used elsewhere