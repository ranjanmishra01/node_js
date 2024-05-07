const express = require('express');
const app = express();
const PORT  = 8010;
const userRouter = require('./routes/car');

const { connectMongoDb } = require('./connection');
const {logReqRes} = require('./middleware/index');


//CONNECTION MONGODB
connectMongoDb('mongodb://127.0.0.1:27017/twentyOne')
.then(() => console.log("MongoDb connected!"));

app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"));


app.use('/api/cars', userRouter);

app.listen(PORT, () => console.log("Server started"));




