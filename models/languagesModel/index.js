const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Languages = sequelize.define("Languages", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Languages;
