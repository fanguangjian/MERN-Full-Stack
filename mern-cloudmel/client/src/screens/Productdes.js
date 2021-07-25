/*
 * @Author: your name
 * @Date: 2021-07-24 13:42:47
 * @LastEditTime: 2021-07-25 18:52:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mern-cloudmel/client/src/screens/Productdes.js
 */
import React, { useEffect, useState } from 'react'
// import products from '../Mockdata/product'
import { Money } from "react-format";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from '../actions/productActions';



export default function Productdes({match}) {
    const getRroductByIdState = useSelector(
        state => state.getProductByIdReducer
    );
    const { loading, product, error } = getRroductByIdState;

    const productId = match.params.id;
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch action
        dispatch(getProductById(productId));
      }, []);

    // const product = products.find(product => product.id == productId)
    return (
        <div>
            {loading ? (
                <h1>Loading......</h1>
                ) : error ? (
                    <h1>Somthing went wrong </h1>
                ) : ( 
                    <div>
                    <div>{product.name}</div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card p-2 m-2">
                                <h1>{product.name}</h1>
                                <img src={product.image} alt=""  className="img-fluid m-3 bigimg"/>
                                <p>{product.description}</p>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="m-2 text-start">
                                <h1>Price:<Money>{product.price}</Money></h1>
                                <hr />
                                <h1>Select Qty:</h1>
                                <select name="" id=""  className="">
                                    {[...Array(product.countInStock).keys()].map((x,i)=>{
                                        return <option value="{i+1}">{i+1}</option>
                                    })}
                                </select>
                                <hr />
                                <button className="btn btn-dark">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }

        </div>
       
       
    )
}
