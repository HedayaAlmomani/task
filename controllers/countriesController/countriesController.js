const axios = require("axios");
const uniqueId = () => Math.random().toString(36).substring(2, 10);

class CountriesController {
  constructor(Countries, Currencies, CountriesCurrencies) {
    this.countries = Countries;
    this.currencies = Currencies;
    this.countriesCurrencies = CountriesCurrencies;
  }

  // enter data to database

  createCountry = async (req, res) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      // step 1
      response?.data?.forEach(async (item) => {
        const { name, cca2, ccn3, cca3, region, latlng } = item;
        const countryId = uniqueId();
        const filteredData = {
          id: countryId,
          commonName: name?.common || "",
          officialName: name?.official || "",
          cca2: cca2 || "",
          ccn3: ccn3 || "",
          cca3: cca3 || "",
          region: region || "",
          latitude: latlng[0],
          longitude: latlng[1],
        };
        const newCountry = await this.countries.create({ ...filteredData });
        // step 2
        if (item?.currencies) {
          for (const key in item?.currencies) {
            const currency = item?.currencies[key];
            const currencyId = uniqueId();
            const newCurrency = await this.currencies.create({
              id: currencyId,
              sign: key || "",
              name: currency?.name || "",
              symbol: currency?.symbol || "",
            });

            const countriesCurrenciesId = uniqueId();
            const newCountriesCurrencies =
              await this.countriesCurrencies.create({
                id: countriesCurrenciesId,
                countryId: countryId,
                currencyId: currencyId,
              });
          }
        }
      });
      res.json("sucsess");
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };
  getCountries = async (req, res) => {
    this.countriesCurrencies.hasOne(this.countries, {
      foreignKey: "id",
    });
    this.countries.belongsTo(this.countriesCurrencies, {
      foreignKey: "id",
    });
    try {
      const data = await this.countriesCurrencies.findAll({
        include: [
          {
            model: this.countries,
            attributes: ["id", "commonName", "officialName"],
          },
        ],
      });

      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };
}

module.exports = CountriesController;
