import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
export default function Navbar(props){
    let  {
        inCart,
        isOpen,
        setIsOpen,
    } = props
    const dropdownBtn= () =>{
        if(isOpen===false){
        return setIsOpen(true) 
        }else{
            setIsOpen(false)
        }
    }
    return (
        <>
        <div className="Nav__Container">
            <h1>The Circuit Store</h1>
            <nav>
                <a href="https://www.instagram.com/williamj.priest/"><FontAwesomeIcon icon={["fab", "instagram"]}  /> </a>
                <a href="https://www.linkedin.com/in/william-j-priest-5aa7341a2/"><FontAwesomeIcon icon={["fab", "linkedin"]}  /> </a>
                <a href="https://github.com/WilliamJPriest"><FontAwesomeIcon icon={["fab", "github"]} /></a>   
            </nav>
            <div className="cartInfo">
                <span className="DropDown__BTN" onClick={dropdownBtn}>InCart: {inCart.reduce((total,item) =>total+(item.quantity),0)}</span>
            </div>
        </div>
        </>
    )
}
