const express = require('express');

const port = 3000;

const app = express();

app.get('/josh', (req,res) => {res.send("Hello Josh")}); 

app.get('/walter', (req,res) => {res.send("Hello Walter")});

app.get('/matt', (req,res) => {res.send("Hello Matt")}); 


app.listen(port, ()=>console.log("Listening"));