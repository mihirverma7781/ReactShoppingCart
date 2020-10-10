import React,{useState} from 'react'

const Cart = ({cart,setCart,cartStack,setCartStack}) => {

   

const removeFromCart=(index,item)=>{
const temp=[...cart]
temp.splice(index,1)
setCart(temp)
setCartStack(cartStack-item.cost)
}

    return (
<div className="cart-main">
        <h3>Cart</h3>
        <div className="bc">            {
                cart.map((item,index)=>(
                <div className="pro-items" key={index}>
                <img src={cart.image}/>
                <h4>{item.name}</h4>
                <h4>PRICE: {item.cost} $</h4>
                <button className="btn btn-danger" onClick={()=>removeFromCart(index,item)}>Remove from cart</button>
                </div>
                ))
                
            }
            </div>
       </div>
    )
     
               
    
}

export default Cart
