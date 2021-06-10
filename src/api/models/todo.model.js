const mongoose = require('mongoose');

const todoScheme = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Todo', todoScheme, 'todos')