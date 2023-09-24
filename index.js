const express = require("express");
const app = express();
const PORT = 5000;
app.use(express.json());

require("./models/db");
require("./models/userModel")
require("./models/CountriesModel")
require("./models/CountriesModel")
require("./models/languagesModel")
require("./models/countriesCurrenciesModel")
require("./models/countriesLanguagesModel")


const sequelize = require("./models/sequelize");
const countriesRouter = require("./routes/countries");
const userRouter = require("./routes/user");


app.use("/countries", countriesRouter);
app.use("/user", userRouter);


app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`app listening at http://localhost:${PORT}`);
});
