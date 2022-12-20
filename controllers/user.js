const UserModel = require("../models/users");
const Todo = require("../models/todos");
const JWT = require("jsonwebtoken");
const signtoken = (userId) => {
  return JWT.sign(
    {
      iss: "ISMAIL",
      userID: userId,
    },
    process.env.SECRET,
    { expiresIn: "12h" }
  );
};

exports.signup = (req, res, next) => {
  var newUser = new UserModel({
    username: req.body.username,
    password: req.body.password,
    role: "user",
  });

  UserModel.findOne({ username: req.body.username }, (err, user) => {
    if (err) res.send({ message: "Error" });
    if (user) res.status(500).send({ message: "User existe déjà" });
    if (!user) {
      newUser.save((err, user) => {
        if (err) {
          console.log(err);
          res.status(500).send({ ok: false, message: "An error has occured" });
        } else {
          res.status(201).send({
            ok: true,
            username: user.username,
            token: signtoken(user._id),
          });
        }
      });
    }
  });
};

exports.login = (req, res) => {
  const { _id, username, role } = req.user;
  const token = signtoken(_id);
  res.cookie("access_token", token, {
    httpOnly: false,
    sameSite: "none",
    secure: true,
  });
  res.status(200).json({
    isAuthenticated: true,
    ok: true,
    user: { username, role },
    /* access_token: token, */
  });
};

exports.logout = (req, res) => {
  res.clearCookie("access_token");
  res.json({ user: { username: "", role: "" }, success: true });
};

exports.addTodo = (req, res) => {
  const todo = new Todo(req.body);
  todo.save((err) => {
    if (err)
      res.status(500).json({ message: { msgBody: err, msgError: true } });
    else {
      req.user.todos.push(todo);
      req.user.save((err) => {
        if (err)
          res.status(500).json({
            message: { msgBody: err, msgError: true },
          });
        else
          res.status(200).json({
            message: {
              msgBody: "Todo successfully created",
              msgError: false,
            },
          });
      });
    }
  });
};

exports.getTodo = (req, res) => {
  console.log(" tiiii");

  UserModel.findById({ _id: req.user._id })
    .populate("todos")
    .exec((err, document) => {
      if (err)
        res.status(500).json({
          message: { msgBody: "error has occured", msgError: true },
        });
      else {
        console.log(JSON.parse(document.todos));
        res
          .status(200)
          .send({ todos: JSON.parse(document.todos), authenticated: true });
      }
    });
};

exports.updateTodo = (req, res) => {
  const { _id, name } = req.body;

  Todo.findByIdAndUpdate(
    _id,
    { name: name },
    { new: true },
    (err, document) => {
      if (err)
        res.status(500).json({
          message: { msgBody: "error has occured", msgError: true },
        });
      else {
        res.status(200).json({ todo: document, authenticated: true });
      }
    }
  );
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
