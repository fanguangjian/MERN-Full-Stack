/*
 * @Author: your name
 * @Date: 2021-07-24 11:48:49
 * @LastEditTime: 2021-07-25 15:30:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mern-cloudmel/client/src/screens/Homescreen.js
 */
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
// import Products from "../Mockdata/product";
import Product from "../components/Product";
import { getAllProducts } from "../actions/productActions";


export default function Homescreen() {

  const [Products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() =>{
      axios.get('./api/products/getAllProducts').then( res => {
        console.log(res);
        setProducts(res.data.data.data);
      }).catch(err =>{
        console.log(err);
      })

      dispatch(getAllProducts());
  },[])

  return (
    <div>
      <div className="row justify-content-center">
        {Products.length  &&  (Products.map((product) => {
          return <div className="col-md-3 m-5 card p-2" key={product._id}>
               <Product pro={product}/>
          </div>
       
        }))}
      </div>
    </div>
  );
}
