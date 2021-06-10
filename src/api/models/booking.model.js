const mongoose = require('mongoose');

const bookingScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    booking: {
        type: String,
        required: true
    },
    bookingDate: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Vinapp', bookingScheme, 'bookings')