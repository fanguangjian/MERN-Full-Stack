/*
 * @Author: your name
 * @Date: 2021-07-24 17:08:46
 * @LastEditTime: 2021-07-25 18:21:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /mern-cloudmel/server.js
 */
const express = require("express");
const bodyParser = require("body-parser");
const  app = express()

let dbConnection = require('./db');
let productRoute = require('./routes/productsRoute')
app.use(bodyParser.json());

app.use('/api/products/', productRoute)

app.get("/",(req, res) => {
    res.send("This is from back end");
});

const port = 8000;
app.listen(port, ()=> console.log('Node Js server started'))