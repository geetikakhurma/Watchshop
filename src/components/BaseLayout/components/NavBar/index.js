// Dependencies
import React from 'react';

import { NavLink } from 'react-router-dom';
// Internals
import './index.css';
import {FaShoppingCart} from 'react-icons/fa'


const Navbar = () => (

  
    <div className="shopping-cart">
    <NavLink to="/cart"><FaShoppingCart size='3rem' color='white' >shopping_cart</FaShoppingCart></NavLink>
    
    </div>
  
);

export default Navbar;
