const sequelize = require('./db'); //import connection
const { DataTypes } = require('sequelize'); //Object destructuring

//Define the Cheese model

const Cheese = sequelize.define('Cheese', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
});

module.exports = Cheese;