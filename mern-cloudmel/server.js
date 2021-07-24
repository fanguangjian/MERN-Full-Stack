const express = require("express");
const  app = express()

app.get("/",(req, res) => {
    res.send("This is from back end");
});

const port = 8000;
app.listen(port, ()=> console.log('Node Js server started'))