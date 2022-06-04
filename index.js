const express = require("express");
const mongo = require("./connect.js");
const employeeRouter = require("./router/employee");
const dotenv = require("dotenv");


dotenv.config();
const app = express();

//to pasrse request.body , to send from client to expres framework we are uding this middleware.
app.use(express.json());




mongo.connect();

// app.use("/",(req,res,next)=>{
//     // res.send("Authorise and Authenticate");
//     console.log("Authorise and Authenticate");
//     next();     
    
//     // next() this is used to pass controller from the one middleware to next matching router/url
//         // middle ware : till the half of the url , it repsonsds EX: localhost:3001 =="/"
//     // end : till end of the url == localhost:3001/users 
// })

// app.use("/users",(req,res,next)=>{
//     console.log("Authenticate");
//     next();
// })

// app.use("/users/get",(req,res,next)=>{
//     res.send({
//         "name" : "prem",
//         "age": 32
//     });
// })

app.use("/",(req,res,next)=>{
    console.log("Custom Middleware");
    next();
})

app.use("/employee",employeeRouter)


app.listen(process.env.PORT || 3000);