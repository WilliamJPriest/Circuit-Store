import React from 'react'

export default function LoadCart(props) {
    let {inCart,
        setInCart ,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        closeModal, 
        setIsActive,
        setIsOpen}=props
   
    const PurchasePage = () =>{
        setIsActive(true)
        setIsOpen(false) 
        setInCart(inCart.filter((cart)=>( cart.id ==="filtered"))) 
        localStorage.clear()
        const timer = setTimeout(() => {
                setIsActive(false)
            }, 4000);
            return () => clearTimeout(timer);

        }
        

    return (
        <>
            <span className="Close__Modal__BTN" onClick={() => closeModal()}>X</span>
            {inCart.map((cart)=>(
               <div className="Cart__Item" key={"cart" + cart.id}>
                    <h2>{cart.name}</h2>
                    <img src={cart.img} alt={cart.name}></img>
                    <p><span onClick={() => removeFromCart(cart)}>-</span> {cart.quantity}<span onClick={() => addToCart(cart)}>+</span> <span onClick={() => removeAllFromCart(cart)}>X</span></p>
                    <p>${parseFloat(cart.price*cart.quantity).toFixed(2)} </p>
               </div>
               ))}
            <div className={"Purchase__Info"}>
                <p>
                    TotalPrice: {parseFloat(inCart.reduce((total,item)=>total+(item.price*item.quantity),0)).toFixed(2)}
                </p>
                <button onClick={() => PurchasePage()}>
                    Purchase
                </button>
            </div>


                
           
           
               {/* {[...inCart, ...price].reduce((total, amount) => (
                <div>
                        <h2>{total+amount}</h2>
                </div>
        
           ))} */}
           
        </>
    )
}
