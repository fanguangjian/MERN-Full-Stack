const express = require("express");
const router = express.Router();
const Product = require('../models/productModel');
const { SuccessModel, ErrorModel} = require('../models/resModel');

router.get("/getAllProducts", (req, res) => {
    Product.find({}, (err, docs) => {
        if(!err){
            // return res.json({data: docs});
            return res.json(
                new SuccessModel({data: docs})        
            );
           
        } else {
            // return res.status(400).json({message : 'Something went wrong!'});
            return res.status(400).json(
                new ErrorModel({message : 'Something went wrong!'})                
            );

           
        }
    })
});
module.exports =router