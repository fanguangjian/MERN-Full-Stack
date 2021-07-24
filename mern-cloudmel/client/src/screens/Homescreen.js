import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// import Products from "../Mockdata/product";
import Product from "../components/Product";

export default function Homescreen() {

  const [Products, setProducts] = useState([]);

  useEffect(() =>{
      axios.get('./api/products/getAllProducts').then( res => {
        console.log(res);
        setProducts(res.data.data.data);
      }).catch(err =>{
        console.log(err);
      })
  },[])

  return (
    <div>
      <div className="row justify-content-center">
        {Products.length  &&  (Products.map((product) => {
          return <div key={product._id}>
               <Product pro={product}/>
          </div>
       
        }))}
      </div>
    </div>
  );
}
