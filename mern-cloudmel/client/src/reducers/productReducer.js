/*
 * @Author: your name
 * @Date: 2021-07-25 14:17:26
 * @LastEditTime: 2021-07-25 15:13:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mern-cloudmel/client/src/reducers/productReducer.js
 */
export const getAllProductsReducer=(state={}, action) => {
    
    switch(action.type){

        case 'GET_PRODUCTS_REQUEST' : return {
            loading: true
        }
        case 'GET_PRODUCTS_SUCCESS' : return {
            products: action.payload,
            loading: false,
        }
        case 'GET_PRODUCTS_FAILED' : return {
            error: action.payload,
            loading: false
        }
        default: return state
    }

};