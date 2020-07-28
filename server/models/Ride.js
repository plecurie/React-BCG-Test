const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RideSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    distance: {
        type: Number,
        required: true,
    },
    startTime: {
        type: Date,
        required:true,
    },
    duration: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Ride', RideSchema);
