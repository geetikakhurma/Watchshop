import PRODUCTS from "../../Data";
import './index.css';
import './index';


const AddtoCart=({cartid,delitem})=>{

 return(
     <div>
      
      <center>  <h1>Your Cart</h1></center>
       {
           cartid.map((id,index)=>{
               return(<div className="container"  >
                {PRODUCTS.map((product) => {
        
        if (product.id === id) {
          return(
            <div className="toppe" >
                 <div className="crtimg">
                <img id="crtimg" alt={product.name} src={product.img} />
              </div>
               <div className="product-detail">
                  <h1 id="product-names">{product.name}</h1>
                  <h4 id="product-descriptions">{product.description}</h4>
                </div> 

                
                <div className="pp">
                <h4>${product.price}</h4>
                </div>

                <div className="btns"> 
                    <button id="cl" onClick={()=>{delitem(product.id)}}  >Remove</button>
      
                  </div>
              
             
        
               
             
        </div>
          )
        }
        else if(id===' ')
        {
          <h1>PLEASE ADD ITEMS TO CART</h1>
        }
      })}
               </div>)
           })
       }
     </div>
 )
}
export default AddtoCart;