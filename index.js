const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const carsRoutes = require('./routes/cars');
// const indexRoutes = require('./routes/start');

// Variables
const databaseConn="mongodb+srv://pro:0723557337@carraceproject.0smm9nm.mongodb.net/test?retryWrites=true&w=majority";

const port = process.env.PORT || 8700;

// Connect to the database
mongoose.connect(databaseConn);
const database = mongoose.connection;

database.on('error', (error) => {
    console.error(error);
});

database.once('connected', () => {
    console.log('Database connected');
});

// Create an express app
const app = express();

app.use(express.json());
// app.use('/', indexRoutes);
app.use('/cars', carsRoutes);

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});