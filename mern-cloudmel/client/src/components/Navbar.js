/*
 * @Author: your name
 * @Date: 2021-07-24 10:03:32
 * @LastEditTime: 2021-07-24 10:13:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /client/src/components/Navbar.js
 */
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="#">
          Mern CloudMel
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav" style={{"margin-left":"auto"}}>   
            <li className="nav-item ml-auto">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
               <i class="fas fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav> 

    </div>
  );
}
