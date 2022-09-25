import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = ({getCetagory}) => {
    //console.log(getCetagory)
        const [products, setProducts] = useState([])
        useEffect(() => {
            fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
                .then(res => res.json())
                .then(data => setProducts(data))
        }, [])
        const [cart,setCart]=useState([])
        const addToCart=(product)=>{
            console.log(product)
            const newCart=[...cart,product]
            setCart(newCart)
            //console.log().price)
         

        }
        getCetagory(products)
        return ( 
            <div className = 'shop-container'>
            
            <div className = "products-container"> {
                products.map(product => <Product product = {product}add={()=>addToCart(product)} > </Product>
                 )
                } 
                <h1> { products.length } </h1>
                

                
                </div> <
                div className = "cart-container" >
                
                
                <Cart cart={cart}></Cart>

                
                </div> 
                </div>
            );
        };

        export default Shop;