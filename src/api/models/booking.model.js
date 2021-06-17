const mongoose = require('mongoose');

const bookingScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
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
        type: Date,
        default: Date.now,
        required: true
    },
    message: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Vinapp1', bookingScheme, 'bookings')