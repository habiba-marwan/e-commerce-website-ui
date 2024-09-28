import profilePic from "../Unknown.jpeg";
import propTypes from "prop-types";
import { useState,createContext, useContext} from "react"
import {myContext} from "../context"


function Card() {
const {products,cartProducts ,setCartProducts,sum ,setSum} = useContext(myContext)
const [searched,setSearched] = useState('')
const [size,setSize] = useState('')
const handleAddToCart = (newProduct)=> {
  let flag = 0;
  newProduct.quantity = 1
  setSum(sum+newProduct.price);
  setCartProducts((prevCart) =>{
    if(!prevCart){
      return newProduct;
    }
   const index = prevCart.findIndex((product)=> product._id === newProduct._id)
   if(index === -1)
    return [...prevCart,newProduct];
  else {
    console.log( prevCart[index].quantity)
    prevCart[index].quantity+=1
    return prevCart;
  }
  }
  )
  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  localStorage.setItem('sum', JSON.stringify(sum));
}
const handleSearched = (event) => {
setSearched(event.target.value)
}
const handleSize = (event) => {
    setSize(event.target.value)
    // product.size = size;
    // setCartProducts([...cartProducts,product])
}
  // products.sort((a,b)=>a.name.localeCompare(b.name)) //to sort products in alphabitcal order
//   const filtered = products.filter((product) => product.price <= 2000);
  return( 
    <>
    <div className="search">
    <input placeholder=" search a product " onChange={handleSearched}></input>
    <p>{searched}</p>
      </div>
    <div className="card-container">
    { products.length ?
    products.map((product) => {
    return (
      <div className="card" key={product.id}>
        <img
          className="card-image"
          src={profilePic}
          alt="this is my profile"
         ></img>
        <h2 className="card-title">{product.title}</h2>
        <span>{product.price} EGP</span>
        <p className="card-text">
         {product.description}
        </p>
        <button className="card-button" onClick={()=>(handleAddToCart(product))}>Add To Cart</button>
      <select className="card-selector" onChange={()=>(handleSize(product))}>
        <option>choose a size</option>
        <option>small</option>
        <option>medium</option>
        <option>large</option>
      </select>
      </div>
    )
  }): <p>no elements to show</p>
}
</div>
</>
);
}

Card.propTypes = {
  name: propTypes.string,
  price: propTypes.number,
};
Card.defaultProps = {
  name: "guest",
  price: 0,
};
export default Card;
