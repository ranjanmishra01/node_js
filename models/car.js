const mongoose = require('mongoose');


const carSchema = new mongoose.Schema({
    car_maker: {type: String, required: true},
    car_model: {type: String, unique: true},
    car_year: Number,
    car_price: String,
    car_vin: String
}, {timestamps: true});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;