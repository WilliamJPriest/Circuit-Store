import React from 'react'


export default function LoadStore(props) {
    let {PRODUCTS,addToCart,closeModal}=props

    return (
        <main onClick={() => closeModal()}className="Store__Container">
            {PRODUCTS.map((product) =>(
                <section key={product.id}  className="Product__Container" >
                    <h2>{product.name}</h2>
                    <img src={product.img} alt={product.name} ></img>
                    <p>${product.price}</p>
                    <button onClick={() => addToCart(product)}> Add to cart</button>

                </section>
            ))}
            
        </main>
    )
}
