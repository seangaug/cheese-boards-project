const {Sequelize, sequelize} = require('./db'); //import connection
const { DataTypes } = require('sequelize'); //Object destructuring

//Define the Board model

const Board = sequelize.define('Board', {
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.INTEGER
});

module.exports = { Board };