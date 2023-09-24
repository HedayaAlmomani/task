const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Brand = require("../brandModel/index"); // Import the Brand model

const Product = sequelize.define("Product", {
  productId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  BrandId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Brand,
      key: "BrandId",
    },
  },
});

module.exports = Product;
