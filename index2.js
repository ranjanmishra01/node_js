const express = require('express');
const app = express();

const mongoose = require('mongoose');

//mongodb://127.0.0.1:27017/twentyOne

// const cars = require('./car_data.json'); //The cars variable, now containing an array of car objects (assuming the above JSON structure)
const fs = require('fs');
// const { error } = require('console');
// const { type } = require('os');

const PORT  = 8005;


//CONNECTION MONGODB
const uri = 'mongodb://127.0.0.1:27017/twentyOne';

mongoose.connect(uri)
.then(() => console.log('Connect to mongoDB'))
.catch((err) => console.error('Error connecting to MongoDB', err));

const dbName = 'twentyOne';
mongoose.connection.useDb(dbName);

const carSchema = new mongoose.Schema({
    car_maker: {type: String, required: true},
    car_model: {type: String, unique: true},
    car_year: Number,
    car_price: String,
    car_vin: String
}, {timestamps: true});

const Car = mongoose.model('Car', carSchema);

// const newCar = new Car({
//     car_maker: "Honda",
//     model: "SUV",
//     year: 2024,
//     price: 90202,
//     color: "White"
// // });

// newCar.save()
// .then(savedUser => {
//     console.log('User saved successfully:', savedUser);
// })
// .catch(err => {
//     console.error('Error saving user: ', err);
// });



app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    fs.appendFile("log.txt", `\n ${Date.now()}: ${req.ip}: ${req.method}: ${req.path}\n`,
    (err, data) => {
        next();
    });
});

//routes

app.get("/cars", async (req, res) => {
    const allDbUsers = await Car.find({});
    const html = `
    <ul>
    ${allDbUsers.map((car) => `<li> ${car.car_maker}</li>`).join("")};
    </ul>
    `
    res.send(html);
});

app.get("/api/cars", (req, res)=> {
    res.setHeader("X-MyName", "Ranjan Mishra");
    return res.json(cars);
})



app.route("/api/cars/:id")
.get(async (req, res) => {
    const carss = await Car.findById(req.params.id);
    return res.json(carss);
})
.patch( async (req, res) => {
    await Car.findByIdAndUpdate(req.params.id, {car_maker: 'Changed'});
    return res.json({status:"patch"});
})
.delete(async (req, res) => {
    await Car.findByIdAndDelete(req.params.id);
    return res.send({status:"delete"});
});


app.post("/api/cars", async(req, res) => {
    const body = req.body;
    if(!body || !body.car_maker || !body.car_model ) {
        return res.status(400).json({msg:"All field are req..."});
        }
        
        const result = await Car.create({
        "car_maker": body.car_maker,
        "car_model": body.car_model,
        "car_year": body.car_year,
        "car_price": body.car_price,
        "car_vin": body.car_vin
        })
    // console.log(result);
    return res.status(201).json({msg: "success"});
});


    app.listen(PORT, () => console.log("Server started"));




