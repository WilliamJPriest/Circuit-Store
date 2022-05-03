import React,{useState,useEffect}from 'react'
import './App.css';
import Nav from './Nav/Nav.js'
import Carousel from './Carousel/Carousel.js'
import Main from './Main/Main.js'
import DropDown from './Dropdown/Dropdown.js'
import Footer from './Footer/Footer.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'


library.add(faInstagram,faLinkedin,faGithub)


const PRODUCTS= [{
  id:1,
  name:"Jumper Wires 40pcs",
  price: 3.49,
  img: "img/jumpers.webp",
},
{
  id:2,
  name:"Breadboard 3pcs",
  price: 9.99,
  img:"img/breadboard.webp",
},
{
  id:3,
  name:"Starter Kit: 5 Projects w/ Tutorials",
  price: 14.99,
  img:"img/starterkit.png",
}
]

function App() {
  const [isActive,setIsActive]=useState(false)
  const [isOpen,setIsOpen]=useState(false)
  const [inCart,setInCart]=useState([])

useEffect(() =>{
    const inCartItems= JSON.parse(localStorage.getItem("InCartItems"));
    if(inCartItems){
       setInCart(inCartItems)
       }

  },[]);

useEffect(() =>{
    localStorage.setItem("InCartItems",JSON.stringify(inCart))

  },[inCart]);
  

  const addToCart =(product) =>{
    const existence = inCart.find(item => item.id===product.id);
    if(existence) {
      setInCart(
        inCart.map((item) => 
          item.id===product.id ? {...existence, quantity: existence.quantity+1}:item 
        )) 
    }else{
      setInCart([...inCart,{ ...product, quantity: 1}])
    }

  
  }

  const removeFromCart= (product) =>{ 
      const existence=inCart.find(item => item.id===product.id);
      if(existence) {
        setInCart(
          inCart.map((item) => 
            item.id===product.id ? {...existence, quantity: existence.quantity-1}:item 
          )) 
      }
      if(existence.quantity===1){
        setInCart(
          inCart.filter((item)=>
            item.id!==product.id))      
      }

    }
  const removeAllFromCart=(product)=>{
      const existence=inCart.find(item=> item.id ===product.id);
      if(existence){
      setInCart(
        inCart.filter((item)=>
        item.id!==product.id))
      }
     
    }

  const closeModal = () =>{
      setIsOpen(false) 
  }


  return (
    <>
    <Nav  inCart={inCart} isOpen={isOpen} setIsOpen={setIsOpen}/>
    <Carousel closeModal={closeModal}/>
    <Main PRODUCTS={PRODUCTS} closeModal={closeModal} addToCart={addToCart}/>
    <section className={`DropDown__Container ${isOpen? "Show__DropDown":"" }` }>
      <DropDown inCart={inCart}  setInCart={setInCart} addToCart={addToCart} removeFromCart={removeFromCart} removeAllFromCart={removeAllFromCart} closeModal={closeModal} setIsActive={setIsActive}  setIsOpen={setIsOpen}/>
    </section>
    <section  className={`Purchase__Popup__Container ${isActive? "Active__Purchase__Popup":"" }` }>
      <div className="Purchase__Popup">
        <p> Purchase Complete</p>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default App;
