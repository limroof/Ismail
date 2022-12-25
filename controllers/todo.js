const TodoModel = require("../models/todos");
const UserModel = require("../models/users");

exports.addTodo = (req, res) => {
  const todo = new TodoModel(req.body);
  const _id = req.auth.userId;
  todo.save((err) => {
    if (err)
      res.status(500).json({ message: { msgBody: err, msgError: true } });
    else {
      UserModel.findById(_id, (err, document) => {
        document.todos.push(todo);
        document.save((err) => {
          if (err)
            res.status(500).json({
              message: { msgBody: err, msgError: true },
            });
          else {
            console.log("SUCCESS ADD_TOTO");
            res.status(200).json({
              message: {
                msgBody: "Todo successfully created",
                msgError: false,
              },
            });
          }
        });
      });
    }
  });
};
exports.deleteTodo = (req, res) => {
  const _idUser = req.auth.userId;
  const _idTodo = req.body._id;

  TodoModel.findByIdAndDelete(_idTodo, (err) => {
    if (err)
      res.status(500).json({ message: { msgBody: err, msgError: true } });
    else {
      UserModel.findById(_idUser, (err, document) => {
        if (err)
          res.status(500).json({
            message: { msgBody: err, msgError: true },
          });
        else {
          document.todos.map((elem, index) => {
            elem + "" === _idTodo && document.todos.splice(index, 1);
          });
          document.save((err) => {
            if (err) {
              res.status(500).json({ err });
            } else {
              res.status(200).json({
                message: {
                  msgBody: "Todo successfully created",
                  msgError: false,
                },
              });
            }
          });
        }
      });
    }
  });
};
exports.getTodo = (req, res) => {
  const _id = req.auth.userId;
  UserModel.findById({ _id })
    .populate("todos")
    .exec((err, document) => {
      if (err)
        res.status(500).json({
          message: { msgBody: "error has occured", msgError: true },
        });
      else {
        /* console.log(document); */
        res.status(200).send({ todos: document.todos, authenticated: true });
      }
    });
};

exports.updateTodo = (req, res) => {
  const { _id, name, newName } = req.body;
  console.log(_id);
  TodoModel.findByIdAndUpdate(
    { _id },
    { name: newName },
    { new: true },
    (err, document) => {
      if (err)
        res.status(500).json({
          message: { msgBody: "error has occured", msgError: true },
        });
      if (document) {
        res.status(200).json({ todo: document, authenticated: false });
      }
    }
  );
};
