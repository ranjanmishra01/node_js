// handler ko controller kahate hai, controller me sirf function hote hai jise hum apne route se attach karenge

const Car = require("../models/car");


async function handleGetAllUsers(req, res) {
    const allDbUsers = await Car.find({});
    return res.json(allDbUsers);
}


async function getUserById(req, res) {
    const carss = await Car.findById(req.params.id);
    return res.json(carss);
}

async function patchUserById(req, res){
    await Car.findByIdAndUpdate(req.params.id, {car_maker: 'Changed'});
    return res.json({status:"patch"});
}

async function deleteUserById(req, res) {
    await Car.findByIdAndDelete(req.params.id);
    return res.send({status:"delete"});
}

async function createPost(req, res) {
    const body = req.body;
        
        await Car.create({
        "car_maker": body.car_maker,
        "car_model": body.car_model,
        "car_year": body.car_year,
        "car_price": body.car_price,
        "car_vin": body.car_vin
        })
    return res.status(201).json({msg: "success"});
}


module.exports = {
    handleGetAllUsers,
    getUserById,
    patchUserById,
    deleteUserById,
    createPost,
}
