const express = require("express");
const  app = express()

let dbConnection = require('./db');
let productRoute = require('./routes/productsRoute')

app.use('/api/products/', productRoute)

app.get("/",(req, res) => {
    res.send("This is from back end");
});

const port = 8000;
app.listen(port, ()=> console.log('Node Js server started'))