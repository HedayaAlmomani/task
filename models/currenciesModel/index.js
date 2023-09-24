const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Currencies = sequelize.define("Currencies", {
  id: {
    type: DataTypes.TEXT,
    primaryKey: true,
    autoIncrement: false,
  },
  sign: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  symbol: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Currencies;
