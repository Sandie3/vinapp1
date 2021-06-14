const mongoose = require('mongoose');

const vinScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    choordx: {
        type: String,
        required: true
    },
    choordy: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Vinapp2', vinScheme, 'wineries')