import React, { useState } from 'react'
import Cart from './Cart'
import data from './Data.json'
import imaged from './one.jpg'

const Home = () => {

    
    const products=data
    const[cart,setCart]=useState([])
    const [cartStack, setCartStack] = useState(0)

    const addToCart=(product)=>{
        // console.log("function called")
        setCart([...cart, product])
        setCartStack(cartStack+product.cost)
    }
    return (
        <div className="main-home">
       <h2>Products</h2>
       <h5>Cart Items {cart.length}</h5>
       <h5>Cart Stack {cartStack}</h5>
       <div className="products-div">
           <div className="cart">
    
    </div>
            {
                products.map((product,index)=>(
                <div className="pro-items" key={index}>
                <img src={product.image}/>
                <h4>{product.name}</h4>
                <h4>PRICE: {product.cost} $</h4>
                <button className="btn btn-success" onClick={()=>addToCart(product)}>Add to cart</button>
                </div>
                ))
            }
       </div>
        <Cart cart={cart} setCart={setCart} cartStack={cartStack} setCartStack={setCartStack}> </Cart>
       </div>
        
    )
}

export default Home
