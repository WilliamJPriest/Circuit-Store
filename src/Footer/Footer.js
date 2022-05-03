import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 

export default function Footer() {
    return (
        <>
            <footer>
                <h3>Created by William J.</h3>
                <div className="Social__Links">
                <a href="https://www.instagram.com/williamj.priest/"><FontAwesomeIcon icon={["fab", "instagram"]}  /> </a>
                <a href="https://www.linkedin.com/in/william-j-priest-5aa7341a2/"><FontAwesomeIcon icon={["fab", "linkedin"]}  /> </a>
                <a href="https://github.com/WilliamJPriest"><FontAwesomeIcon icon={["fab", "github"]} /></a>   
                </div>
             </footer>
        </>
    )
}
