const UserModel = require("../models/users");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signtoken = (userId) => {
  return JWT.sign(
    {
      iss: "ISMAIL",
      userID: userId,
    },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
};

exports.signup = (req, res, next) => {
  const { username, password } = req.body;
  var newUser = new UserModel({
    username: username,
    password: password,
    role: "user",
  });
  UserModel.findOne({ username: username }, (err, user) => {
    if (err) res.send({ message: "Error" });
    if (user) res.status(500).send({ message: "User existe déjà" });
    if (!user) {
      newUser.save((err, user) => {
        if (err) {
          console.log(err);
          res.status(500).send({ ok: false, message: "An error has occured" });
        } else {
          console.log(user);
          res.status(201).send({
            ok: true,
            isAuthenticated: true,
            user: { username, role: "user" },
            token: signtoken(user._id),
          });
        }
      });
    }
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  UserModel.findOne({ username: username })
    .then((user) => {
      if (!user) {
        res
          .status(401)
          .json({ messsage: "Paire identifiants/mot de passe incorrecte" });
      } else {
        bcrypt
          .compare(password, user.password)
          .then((valid) => {
            if (!valid) {
              res.status(401).json({
                messsage: "Paire identifiants/mot de passe incorrecte",
              });
            } else {
              res.status(200).json({
                ok: true,
                isAuthenticated: true,
                user: { username, role: "user" },
                token: signtoken(user._id),
              });
            }
          })
          .catch((e) => {
            res.status(500).json({ message: e });
          });
      }
    })
    .catch((e) => {});
};

exports.logout = (req, res) => {
  res.clearCookie("access_token");
  res.json({ user: { username: "", role: "" }, success: true });
};

exports.checkAdmin = (req, res) => {
  if (req.user.role === "admin")
    res
      .status(200)
      .json({ message: { msgBody: "you are an admin", msgError: false } });
  else
    res
      .status(403)
      .json({ message: { msgBody: "you are not an admin", msgError: true } });
};
