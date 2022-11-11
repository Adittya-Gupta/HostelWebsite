const express = require('express');
const mongoose = require('mongoose');

const User = require("./model/user");
require("dotenv/config");
const app = express();//creating an object of express
//It's a layer built on the top of the Node js that helps manage servers and routes

// const customMiddleware =(req,res,next) =>{
//     console.log("Welcome to my middleware");
//     next();
// }
app.use(express.json());

app.get("/",(req,res) => {
    //console.log("First Request");
    res.send("First request !");
});


app.get("/users",(req,res) =>{
    let users =["Pawan","sf","adi","jacj"];
    res.send(users);
});
app.post("/create-users",async(req,res) =>{
    
try{ 
    const myuser = new User(req.body);   
    await myuser.save()
    res.send(myuser);}
    catch(err){
        res.send({ message : err});
    }
});

mongoose.connect(
    process.env.DB_CONNECTION_STRING,
(req,res)=>{

    console.log("connected to the data base");
});
app.listen(3000,()=>{
    console.log("Listening to 3000");
});