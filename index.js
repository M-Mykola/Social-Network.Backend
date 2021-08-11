require("dotenv").config();

const express = require("express");
const app = express();
const mongooseConnection = require("./helpers/mongoose-connection");
const router = require("./router");

app.use(express.json());
app.use(router);

mongooseConnection();

app.listen(process.env.PORT, function () {
  console.log("Express server listening on port 3000");
});