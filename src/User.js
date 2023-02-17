const sequelize = require('./db'); //import connection
const { DataTypes } = require('sequelize'); //Object destructuring

// Define the User model

const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
});

module.exports = User;