
// DAY 1
// console.log("hi");

// const {add, sub, mul} = require('./math');

// let d = add(3, 5);
// console.log(d);


/** DAY 2*/

// const { isUtf8 } = require("buffer");
// const fs = require("fs");
// const http = require("http");

// fs.writeFileSync("./test.txt", "Hi i am sync")

// const filePath = "test.txt";
// const data = "Hi my name is ranjan mishra richest person in the world";

// fs.writeFile(filePath, data, (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("Success");
//     }
// })


// const data2 = fs.readFileSync("./contact.txt", "utf-8");
// console.log(data2);

// fs.readFile("./contact.txt", "utf-8", (err, data) => {
//     if(err) {
//         console.error("raju", err);
//     } else {
//         console.log(data);
//     }
// })

// function appendToFile(message, callback){
//     const filePath = 'test.txt';

//     fs.appendFile(filePath, message + '\n', (err) => {
//         if(err) {
//             callback(err);
//         } else {
//             callback(null);
//         }
//     })
// }

// const messageToAdd = 'This is a log 2 message';

// function handleError(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("success786");
//     }
// }

// appendToFile(messageToAdd, handleError);

// // fs.unlinkSync("./contact.txt");

// fs.mkdirSync("mkdir/a/b", {recursive : true});


/* DAY 3 */


// const http = require("http");
// const fs = require("fs");
// const url = require("url");
// const PORT  = 8000;

// function myHandler(req, res) {
//     if(req.url === "/favicon.ico"){
//         return res.end();
//     }
//     // console.log(req);
//     const urlParse = url.parse(req.url);
//     console.log(urlParse);
//     const log = `${new Date().toString()} - ${req.url} - ${req.method} - ${urlParse.search} - New req`
//     fs.appendFile("./test.txt", log + '\n', (err) => {
//         switch(urlParse.pathname){
//             case '/':
//                 res.end("Home page");
//                 break;
//             case '/about':
//                 res.end("About page");
//                 break;
//             case '/signup':
//                 if(req.method === "GET") res.end("This is a signup form");
//                 else if(req.method === "POST") res.end("Success") //DB Query;
//             default:
//                 res.end("Default");
//         } // on every route their is 5 type of method
//     });
// }

// const myServer = http.createServer(myHandler);

// myServer.listen(PORT, () => console.log(`Listening at ${PORT}`));

/** DAY 4 */


// // const http = require("http");
// // const fs = require("fs");
// // const url = require("url");
// const PORT  = 8000;

// const express = require("express");
// //we created app and not use directly express because express have a complete framework every tool and functionality but by creating app we only using those tool which i needed, Modular Organization is a major advantage. 
// const app = express(); //product of the blurprint but after creating each product/instance will have its own property, set of value - This instance will have its own set of routes, middleware functions, and configurations tailored to your specific needs.

// app.get('/', (req, res) => {
//     return res.send('Home prrage');
// })
// app.get('/about', (req, res) => {
//     return res.send("Hi i am about page" + " hey " + req.query.myname + " you are " + req.query.age);
// })



// // const myServer = http.createServer(app); //earlier in creater server() function we puting all the function but now only putting app it work

// app.listen(PORT, () => console.log(`Server started at ${PORT}`));


/** DAY 5 */

// const express = require('express');
// const app = express();
// const PORT = 8003;
// const cars = require('./car_data.json');
// const fs = require('fs');

// //middleware
// app.use(express.urlencoded({extended:false})); //run on every request

// app.use((req, res, next) => {
//     fs.appendFile("./log.txt", ``)
//     req.name = "RanKU"
//     next();
// })

// app.use((req, res, next) => {
//     console.log("Hi i am from midle 2", req.name);
//     next();
// })

// //route
// app.get('/', (req, res) => {
//     res.send("Hello you are at home page");
// })

// app.get('/cars', (req, res) => { //HTML
//     const html = `
//     <h1>Your car makers name: </h1> <br>
//     <ul>
//         ${cars.map(car => `<li>${car.car_maker}</li>`)}
//     </ul>
//     `
//     res.send(html);
// })

// app.get('/api/cars', (req, res) => {
//     res.json(cars) ///cars means throw HTML response suitable for web browser /api/cars means JSON data throw intended to consume by other application
//     // res.send(JSON.stringify(cars));
// })

// //dynamic path paramerter if kisi variable ke pahale colon aataa hai, dynamic variable
// app.route('/api/cars/:id')
// .get((req, res) => {
//     const id = Number(req.params.id);
//     const car = cars.find(car => car.id === id);
//     return res.json(car);
// })
// .patch((req, res) => {
//     //TO DO
//     return res.json({status: "patch"});
// })
// .delete((req, res) => {
//     //TO DO
//    return res.json({status: "pending"});
// });


// app.post("/api/cars", (req, res) => {
//     //TO DO
//     const body = req.body;
//     cars.push({id: cars.length + 1, ...body});


//     fs.writeFile('./car_data.json', JSON.stringify(cars), (err) => {
//         return res.json({status: "success", Id_generated: cars.length});
 
//     })
// })



// app.listen(PORT, console.log("Server started"));


/** DAY 6 IN index2.js */