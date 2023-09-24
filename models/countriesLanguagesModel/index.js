const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Languages = require("../languagesModel/index");
const Countries = require("../CountriesModel/index")

const CountriesLanguages = sequelize.define("CountriesLanguages", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  countriesId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Countries,
      key: "id",
    },
  },
  languagesId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Languages,
      key: "id",
    },
  },
});

module.exports = CountriesLanguages;
