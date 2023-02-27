require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const indexRoutes = require('./routes/index');
const carRoutes = require('./routes/cars');

const connectionString = process.env.DATABASE_URL;
const PORT = process.env.PORT;
mongoose.set('strictQuery', true);
mongoose.connect(connectionString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database connected');
});


app.use(express.json());

app.use("/", indexRoutes);
app.use("/cars", carRoutes);

app.listen(PORT, () => {
    console.log('Server is running');
});