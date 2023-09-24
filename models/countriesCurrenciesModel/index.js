const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Currencies = require("../currenciesModel/index");
const Countries = require("../CountriesModel");

const CountriesCurrencies = sequelize.define("CountriesCurrencies", {
  id: {
    type: DataTypes.TEXT,
    primaryKey: true,
    autoIncrement: false,
  },
  countryId: {
    type: DataTypes.TEXT,
    allowNull: false,
    references: {
      model: Countries,
      key: "id",
    },
  },
  currencyId: {
    type: DataTypes.TEXT,
    allowNull: false,
    references: {
      model: Currencies,
      key: "id",
    },
  },
});

module.exports = CountriesCurrencies;
