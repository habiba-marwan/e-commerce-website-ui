import "./App.css";
import { useEffect, useState ,useContext , createContext} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./footer";
import Card from "./pages/home";
import NavigationBar from "./nav";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Register from "./pages/register";
import axios from 'axios';
import { myContext } from "./context";



function App() {
  const [ products,setProducts] = useState([])
  const [cartProducts ,setCartProducts ] = useState([])
  const [sum,setSum] = useState(0)
  useEffect(()=>{
     axios.get('//localhost:3000/products/').then((res)=> { 
      setProducts(res.data)
    }).catch((e)=>{
      console.log(e)
    })
  },[])
  return (
    <>
      <BrowserRouter>
      <NavigationBar/>
      <myContext.Provider value={{products,setProducts,cartProducts, setCartProducts,sum,setSum}}>
      <Routes>
      <Route path="/" element= {<Card/>} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes>
      </myContext.Provider>
      <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
