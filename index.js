const express = require('express');
require('dotenv').config()

const app = express();

const indexRoutes = require('./routes/index');

const PORT = process.env.PORT || 8800

app.use('/', indexRoutes);

app.listen(PORT, () => {
    console.log('Server is running');
});