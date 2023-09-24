const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Countries = sequelize.define("Countries", {
  id: {
    type: DataTypes.TEXT,
    primaryKey: true,
    autoIncrement: false,
  },
  commonName: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  officialName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  cca2: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  ccn3: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  cca3: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  region: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Countries;
