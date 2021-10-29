import Navbar from "../Category/NavBar";
import AddtoCart from "./AddToCart";
import './index.css';

const Cart=({citem,delitm})=>{
   
    return(
        <div>
            <Navbar/>
             <div className='fullpage'>
            
     <AddtoCart cartid={citem} delitem={delitm} />   
     </div>
     </div>
    )
}
export default Cart;