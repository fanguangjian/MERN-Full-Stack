import React from "react";
import Products from "../Mockdata/product";
import Product from "../components/Product";

export default function Homescreen() {
  return (
    <div>
      <div className="row justify-content-center">
        {Products.map((product) => {
          return <Product pro={product}/>
        })}
      </div>
    </div>
  );
}
