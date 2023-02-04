const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

// Schema
const raceSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    vehicle: {
        required: true,
        type: String,
    },
    number: {
        required: true,
        type: String,
    },
    wins: {
        required: true,
        type: Number,
    },
});

module.exports = mongoose.model('Races', raceSchema);