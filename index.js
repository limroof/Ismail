require("dotenv").config();
const express = require("express");
const app = express();
<<<<<<< HEAD
const port = process.env.PORT;
const userRoute = require("./Routes/users");
const cors = require("cors");
const mongoose = require("mongoose");

/* module.export = mongoose
  .connect(
    "mongodb+srv://Ismail:seJkxW4f3db87zzE@cluster0.zx9nhb9.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
 */

const mongoDB = "mongodb://127.0.0.1:27017/UsersTodos";
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;

app.use(
  cors({
    origin: "https://localhost:3000",
    credentials: true,
  })
);

app.use("/users/", userRoute);
=======
const port = process.env.PORT || 8000;
const customerRoute = require("./Routes/customers");

app.use("/customers", customerRoute);
>>>>>>> 4c45c2c5e52954e3016f83583f61d3566b991a71

app.listen(port, () => {
  console.log("Example app listening on port ", port);
});
