require("dotenv").config();

//Express initialization
const express = require("express");
const app = express();

//Sequelize initialization
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT
  });

  //Test DB
  (async () => {
  sequelize.authenticate()
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

const port = process.env.PORT;
const packjson = require("./package.json");

// GET /health --> returns {"name": "Neocomplexx", "version": "1.0.0"}
app.get("/health", function (req, res) {
  res.json({
    name: packjson.name,
    version: packjson.version,
  });
});

app.listen(port, console.log("API rest running at port" + port));
