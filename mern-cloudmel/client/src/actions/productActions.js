/*
 * @Author: your name
 * @Date: 2021-07-25 14:18:03
 * @LastEditTime: 2021-07-25 15:28:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mern-cloudmel/client/src/actions/productActions.js
 */

import axios from "axios";

export const getAllProducts = () => dispatch=> {

    dispatch({type: 'GET_PRODUCTS_REQUEST'})

    axios.get('./api/products/getAllProducts').then( res => {
        console.log(res);
        dispatch({type: 'GET_PRODUCTS_SUCCESS', payload: res.data.data.data});
      }).catch(err =>{
        console.log(err);
        dispatch({type: 'GET_PRODUCTS_FAILED', payload: err});

      })

}