const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:postgres@localhost:5432/workout_log");

module.exports = sequelize;