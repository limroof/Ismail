require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const bodyParser = require("body-parser");
const userRoute = require("./Routes/users");
const todoRoute = require("./Routes/todo");

const cors = require("cors");
const mongoose = require("mongoose");

const database_url =
  process.env.NODE_ENV === "development"
    ? process.env.DATABASE_URL
    : process.env.CLOUD_DATABASE_URL;

/* const database_url = process.env.CLOUD_DATABASE_URL; */
console.log("database_url : " + database_url);
module.export = mongoose
  .connect(database_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    console.log("Connexion à MongoDB réussie ! | " + process.env.NODE_ENV)
  )
  .catch((e) =>
    console.log("Connexion à MongoDB échouée ! | " + process.env.NODE_ENV)
  );

/* const mongoDB = "mongodb://127.0.0.1:27017/UsersTodos";
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
 */

const origin =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://limroof.github.io";
app.use(
  cors({
    origin: origin,
    /* origin: "http://localhost:3000", */
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use("/users/", userRoute, todoRoute);

app.listen(port, () => {
  console.log("Example app listening on port ", port);
});
