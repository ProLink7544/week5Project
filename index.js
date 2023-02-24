require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const indexRoutes = require('./routes/index');
const carRoutes = require('./routes/cars');

const connectionString = process.env.MONGO_URL;
const PORT = process.env.PORT;

mongoose.connect(connectionString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database connected');
});

const app = express();

app.use('/', indexRoutes);
app.use('/cars', carRoutes);

app.listen(PORT, () => {
    console.log('Server is running');
});