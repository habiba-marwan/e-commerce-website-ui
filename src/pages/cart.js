import { useState , useContext } from "react";
import profilePic from "../Unknown.jpeg";
import {myContext} from "../context"
import { Link } from "react-router-dom";
function Cart(){
// const {cartProducts} = useContext(myContext)
const { sum } = useContext(myContext)
const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    return(
      <div className="cart-container">
         <h1 className="cart-heading">My cart</h1>
         <br></br>
{  cartProducts? 
    cartProducts.map((product) => {
      return (
        <div className="card" key={product.id}>
          <img
            className="card-image"
            src={profilePic}
            alt="this is my profile"
           ></img>
          <h2 className="card-title">{product.title}</h2>
          <span><b>{product.price} EGP</b></span>
          <p className="card-text">
           {product.description} x{product.quantity}
          </p>
        </div>
      )
    })
  
  : <p>you did not add any items yet</p>
}
          <p><b>total:</b>{JSON.parse(localStorage.getItem('sum'))}</p>
          <Link to="/register">
           <button className="cart-button">Checkout</button>
           </Link>
           <br></br>
      </div>
   
    )
}
export default Cart;