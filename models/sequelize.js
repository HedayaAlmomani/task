const { Sequelize } = require("sequelize");

//connection URL for SQLite
const dbConnectionURL = `sqlite://my-database.db`;
module.exports = new Sequelize(dbConnectionURL);
