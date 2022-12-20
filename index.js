require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const userRoute = require("./Routes/users");
const cors = require("cors");
const mongoose = require("mongoose");

const USER = process.env.USERNAME;
const PSW = process.env.PASSWORD ;

 module.export = mongoose
  .connect(
    `mongodb+srv://${USER}:${PSW}@cluster0.zx9nhb9.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
/* 
const mongoDB = "mongodb://127.0.0.1:27017/UsersTodos";
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection; */

app.use(
  cors({
    origin: "https://localhost:3000",
    credentials: true,
  })
);

app.use("/users/", userRoute);
const customerRoute = require("./Routes/customers");

app.use("/customers", customerRoute);

app.listen(port, () => {
  console.log("Example app listening on port ", port);
});
