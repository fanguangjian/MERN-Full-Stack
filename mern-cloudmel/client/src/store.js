/*
 * @Author: your name
 * @Date: 2021-07-25 14:49:54
 * @LastEditTime: 2021-07-25 15:07:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mern-cloudmel/client/src/store.js
 */

import { getAllProductsReducer } from "./reducers/productReducer";
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const finalReducer = combineReducers({
    getAllProductsReducer: getAllProductsReducer
})


/**
 * @description:  copy from ; https://www.npmjs.com/package/redux-devtools-extension
 */

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(
    finalReducer,
    // applyMiddleware(thunk)
    composeEnhancers(
        applyMiddleware(thunk)
        // other store enhancers if any
    )
)

export default store