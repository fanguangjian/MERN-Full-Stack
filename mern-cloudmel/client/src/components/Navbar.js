/*
 * @Author: your name
 * @Date: 2021-07-24 10:03:32
 * @LastEditTime: 2021-07-25 22:31:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /client/src/components/Navbar.js
 */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const cartReducer = useSelector(state => state.cartReducer);
  const {cartItems}  = cartReducer;
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="/">
          Mern CloudMel
        </a>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav" style={{"margin-left":"auto"}}>   
            <li className="nav-item ml-auto">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/cart"
              >
               <i class="fas fa-shopping-cart"></i>{cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav> 

    </div>
  );
}
