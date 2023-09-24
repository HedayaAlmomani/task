const CountriesController = require("./countriesController");
const Countries = require("../../models/CountriesModel");
const Currencies = require("../../models/currenciesModel");
const CountriesCurrencies = require("../../models/countriesCurrenciesModel");
const countriesController = new CountriesController(
  Countries,
  Currencies,
  CountriesCurrencies
);

module.exports = {
  createCountry: countriesController.createCountry,
  getCountries: countriesController.getCountries,
};
