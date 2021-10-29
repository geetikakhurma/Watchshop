// Dependencies
import React from 'react';

import { NavLink } from 'react-router-dom';
// Internals
import './index.css';
import {FaShoppingCart} from 'react-icons/fa';


const Navbar = () => (
  <nav className="navbar">
    <div className="nav-links">
      <ul>
        <li><NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/category/women"    >Women</NavLink></li>
      <li><NavLink activeClassName="selected" className="nav-link" to="/category/men">Men</NavLink></li>
      <li><NavLink activeClassName="selected" className="nav-link" to="/category/kids">Kids</NavLink></li>
      </ul>
    </div>
    <div className="shopping-cart">
    
    <NavLink exact to="/cart"><FaShoppingCart size='2rem' color='white' >shopping_cart</FaShoppingCart></NavLink>
  


    </div>
  </nav>
);

export default Navbar;
