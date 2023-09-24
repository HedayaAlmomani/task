const express = require("express");
const {
  createCountry,
  getCountries,
} = require("../controllers/countriesController");
const countriesRouter = express.Router();

countriesRouter.post("/", createCountry);
countriesRouter.get("/", getCountries);

module.exports = countriesRouter;
