const express = require("express");
require("dotenv").config();
const userRouter = express.Router();
const bodyParser = require("body-parser");

const userCtrl = require("../controllers/user");
const passport = require("passport");
require("../passport");
var cookieParser = require("cookie-parser");

userRouter.use(bodyParser.json());
userRouter.use(cookieParser());
userRouter.setHeader(
  "Access-Control-Allow-Origin",
  "https://limroof.github.io"
);

// ******************** USER ROUTE ******************************
userRouter.post("/register", userCtrl.signup);
userRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  userCtrl.login
);
// ******************** GET ROUTE ********************************
userRouter.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  userCtrl.logout
);
// ******************** END: USER ROUTE ******************************

// ******************** TODO ROUTE ******************************
userRouter.post(
  "/todo",
  passport.authenticate("jwt", { session: false }),
  userCtrl.addTodo
);

userRouter.get(
  "/todos",
  passport.authenticate("jwt", { session: false }),
  userCtrl.getTodo
);

userRouter.patch(
  "/todo",
  passport.authenticate("jwt", { session: false }),
  userCtrl.updateTodo
);

userRouter.get(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  userCtrl.checkAdmin
);
// ******************** END: TODO ROUTE ******************************

module.exports = userRouter;
