const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();
const db = require("./models");

var initModels = require("./models/init-models");
/*
var Sequelize = require("sequelize");
var config = require("./config/config");
var sequelize = new Sequelize(
  config.dbname,
  config.user,
  config.pass,
  config.options
);
*/
/*
var db = initModels(sequelize);
var sequelize = require("sequelize");
*/

app.use(express.json());
app.use(cors());

console.log(initModels);
var models = initModels(db.sequelize);

const książkaRouter = require("./routes/książka");
app.use("/book", książkaRouter);
// Routers

const klientRouter = require("./routes/klient");
app.use("/client", klientRouter);

const klient_zarejestrowanyRouter = require("./routes/klient_zarejestrowany");
app.use("/client_registered", klient_zarejestrowanyRouter);

const wydawcaRouter = require("./routes/wydawca");
app.use("/publisher", wydawcaRouter);

const wydanieRouter = require("./routes/wydanie");
app.use("/publication", wydanieRouter);

const kategoriaRouter = require("./routes/kategoria");
app.use("/category", kategoriaRouter);

const zamówienieRouter = require("./routes/zamówienie");
app.use("/order", zamówienieRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001...");
  });
});
