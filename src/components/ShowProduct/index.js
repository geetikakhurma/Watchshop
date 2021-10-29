import React from 'react';
import {ImStarFull} from 'react-icons/im';


//Internals
import PRODUCTS from '../../Data';
import './index.css';
import Navbar from '../Category/NavBar';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


const ShowProduct = ({citem})=> {
  const { id } = useParams();
  return ( 
<div>
{PRODUCTS.map((currentProduct) => {
            if (currentProduct.id == id) {
              return(
      <div>
 <Navbar/>
      <div className="show-product">
     
        <div className="item-wrapper">
          <div className="item-image">
            <img className="product-image" src={currentProduct.img} alt="product" />
          </div>
          <div className="item-name">
            <div className="product-info">
              <h3 id="product-name">{currentProduct.name}</h3>
            </div>
            <div className="product-bio">
              <p id="product-description">{currentProduct.description}</p>
              <p id="product-price">${currentProduct.price}</p>
              <button className='btn'  onClick={()=>{  citem(currentProduct.id);   }}>Add to Cart</button>

            </div>
            <div className="product-review">
              <div className="stars">
              <ImStarFull small id="add-icon">star</ImStarFull>
                <ImStarFull small id="add-icon">star</ImStarFull>
                <ImStarFull small id="add-icon">star</ImStarFull>
                <ImStarFull small id="add-icon">star</ImStarFull>
                <ImStarFull small id="add-icon">star</ImStarFull>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      </div>
    );
        }})}
  </div>
  )
        
}

export default ShowProduct;