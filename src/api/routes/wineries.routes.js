const Todo = require("../models/wineries.model");
const express = require("express");
const router = express.Router();

const formData = require("express-form-data");
router.use(formData.parse());

router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "There was an error in" + error.message });
    }
});

router.get("/:vinid", async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.todoid);
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: "There was an error in" + error.message });
    }
});

router.post("/", async (req, res) => {
    console.log("request body: ", req.body);
    try {
        let newtodo = new Todo(req.body);
        await newtodo.save();
        res
            .status(201)
            .json({ message: "Der er oprettet en ny todo", created: newtodo });
    } catch (err) {
        console.log("ERROR ", err);
        res.status(400).json({ ERROR: "There was an error" });
    }
});

router.put("/:vinid", async (req, res) => {
    if (JSON.stringify(req.body) === "{}") {
        return res.status(410).json({ message: "No data to edit" });
    }

    try {
        let editTodo = await Todo.findByIdAndUpdate(req.params.todoid, req.body, {
            new: true,
        });
        if (editTodo) {
            res.status(200).json({ message: "Todo is edited", edited: editTodo });
        } else {
            res.status(410).json({ message: "Nothing was edited", edited: editTodo });
        }
    } catch (err) {
        console.log("ERROR", err);
        res.status(500).json({ message: "There was an error" });
    }
});

router.delete("/:vinid", async (req, res) => {
    try {
        let deleteTodo = await Todo.findByIdAndDelete(req.params.todoid);
        if (deleteTodo) {
            res.status(200).json({ message: "Todo is deleted", deleted: deleteTodo });
        } else {
            res
                .status(410)
                .json({ message: "Nothing got deleted", deleted: deleteTodo });
        }
    } catch (err) {
        console.log("ERROR", err);
        res.status(500).json({ message: "There was an error" });
    }
});

module.exports = router;
