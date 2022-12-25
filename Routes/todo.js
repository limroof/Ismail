const express = require("express");
const todoCtrl = require("../controllers/todo");
const auth = require("../middleware/auth");
const todoRouter = express.Router();

todoRouter.post("/todo", auth, todoCtrl.addTodo);
todoRouter.get("/todos", auth, todoCtrl.getTodo);
todoRouter.patch("/todo", auth, todoCtrl.updateTodo);
todoRouter.delete("/todo", auth, todoCtrl.deleteTodo);

module.exports = todoRouter;
