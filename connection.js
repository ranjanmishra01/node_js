const mongoose = require("mongoose");

// const uri = 'mongodb://127.0.0.1:27017/twentyOne';


async function connectMongoDb(url) {
   return mongoose.connect(url);

}

module.exports = {
    connectMongoDb,
};