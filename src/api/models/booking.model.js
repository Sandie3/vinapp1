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
        type: String,
        default: Date.now,
        required: false
    },
    message: {
        type: String,
        required: false
    },
    winerie: {
        type: String,
        required: true
    },

    Check: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Vinapp1', bookingScheme, 'bookings')