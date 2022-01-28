require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const packjson = require("./package.json");

app.get("/health", function (req, res) {
  res.json({
    name: packjson.name + " modificado",
    version: packjson.version,
  });
});

app.listen(port, console.log("API rest running at port" + port));
