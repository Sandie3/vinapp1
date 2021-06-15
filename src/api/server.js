const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;
const IP = 'localhost';

// DATA HANDELING

// const formData = require('express-form-data')
// app.use(formData.parse())

app.use(cors({ credentials: true, origin: true })) // cors - Cross-Origon Resource Sharing - "Security"
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
    console.log('Starting app...');
    res.status(200).json({ message: 'Welcome to the server' });
})

// ROUTES

app.use('/booking', require('./routes/booking.routes'))
app.use('/wineries', require('./routes/wineries.routes'))

// DATABASE

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user:Passw0rd123@cluster0.fudsm.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, serverSelectionTimeoutMS: 5000, connectTimeoutMS: 10000 })
    .catch((error) => console.error(error))
const db = mongoose.connection;
// db.on('error', (error) => console.error(error));
db.once('open', () => console.log('---> Db is connected.'))

// PORT

app.listen(PORT, () => {
    console.log(
        '--->  ____  _   _ _      _____ _   _ ______ '
        + '\n---> / __ \\| \\ | | |    |_   _| \\ | |  ____|'
        + '\n--->| |  | |  \\| | |      | | |  \\| | |__   '
        + '\n--->| |  | | . ` | |      | | | . ` |  __|  '
        + '\n--->| |__| | |\\  | |____ _| |_| |\\  | |____ '
        + '\n---> \\____/|_| \\_|______|_____|_| \\_|______|'
        + '\n--->'
        + '\n---> STARTING SERVER ON: ' + IP
        + '\n---> LISTENING ON PORT: ' + PORT
    )
})
