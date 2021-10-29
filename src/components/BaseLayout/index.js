// Dependencies
import React, {  useEffect, useState } from 'react';
// Externals
import Navbar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import pics from  './imgg';
import './index.css';



const classNames=pics.map((pic)=> pic.img)



function BaseLayout(props){
  const [index,setindex]=useState(0);
  const className = classNames[index];
  const delay = 2000;
 useEffect(() => {
    setTimeout(   () =>
        setindex((prevIndex) =>
          prevIndex === classNames.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {};
  }, [index]);
  
  const myComponentStyle = {
    backgroundImage: `url(${className})`,
    display: "flex",
    flexDirection: 'column',
    backgroundSize: "cover",

    backgroundPosition: 'center'

    
 }

  return (
    <div>

<div style={myComponentStyle}>
      
       <Navbar />
          <Header />
          </div>
          <div className="content">
             {props.children}
        </div>
            <div>
        <Footer />
      
    </div>
    </div>
  )
}
export  default BaseLayout;


