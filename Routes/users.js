const express = require("express");
const userRouter = express.Router();
const userCtrl = require("../controllers/user");
var cookieParser = require("cookie-parser");

userRouter.use(cookieParser());
userRouter.post("/register", userCtrl.signup);
userRouter.post("/login", userCtrl.login);
userRouter.get("/logout", userCtrl.logout);
userRouter.get("/admin", userCtrl.checkAdmin);

module.exports = userRouter;
