// Dependencies
import React from 'react';
import { useParams,Link}  from "react-router-dom";



//Internals

import PRODUCTS from '../../Data/index';
import NavBar from './NavBar';




const Category= ()=>{
    const { categ } = useParams();
   

    return(
      <div>
        <NavBar/>
    
        <div className="items">
        
        {PRODUCTS.map((product) => {
            if (product.gender === categ) {
              return(
                <div className="item">
                  <Link to={`/products/${product.id}`}>
                  <div className="product-img">
                    <img alt={product.name} src={product.img} />
                  </div>
                  <div className="product-details">
                    <h1 id="product-name">{product.name}</h1>
                    <h4 id="product-description">{product.description}</h4>
                  </div>
                  </Link>
                  <div className="price-add">
                    <h5 id="product-price">${product.price}</h5>
                  
           
                  </div>
                
                </div>
              )
            }
          })}
    
  </div>
  </div>
    )
}

export default Category;
