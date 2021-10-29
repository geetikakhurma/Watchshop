import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';

import App from  './components/App';
import Category from  './components/Category';
import ShowProduct  from './components/ShowProduct';
import { useState } from 'react';
import Cart from './components/Cart';


const Main=()=>{
    const [cartitems, setcartitem]=useState([]);

    const addToCart=(id)=>{
          setcartitem([...cartitems,id]);
    }
   
    const delitm=(id)=>{
 
      setcartitem( cartitems.filter((item)=>{return (item!=id)}))
 
    }

 return(
    <div>

    <BrowserRouter>
    
        <Switch>
          <Route exact path="/"   component={App} />
          <Route exact path="/cart"  render={()=><Cart citem={cartitems} delitm={delitm}/>} />
          <Route  exact path="/category/:categ"   component={Category} />
          <Route exact path="/products/:id"  render={()=><ShowProduct citem={addToCart}/>} />
        </Switch>
     
    </BrowserRouter>
    </div>
 )
}

export default Main;