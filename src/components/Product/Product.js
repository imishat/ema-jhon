import React from 'react';
import'./Product.css'


const Product = ({ add, product,activeItem }) => {
  console.log(activeItem)
    // const { add, product } = props;
    const { id, category, seller, price, name, img, ratings } = product
     
    return ( 
        <>
    {     category=== activeItem&& <div className = 'product'>
           <img src={img} alt="" />
            <div className="product-info">
        <p className='product-name'> Pruduct-Name:{name}</p>
        <p><small> Price:{price}</small></p>
        <p><small> Seller:
            {seller}</small></p>
        <p><small>Ratings:{ratings}Star</small></p>

       
        
        </div>
        
        <button onClick={()=>add('newCart')}  className='btn-cart'>
        <p>Add to Cart</p></button>
       
       
        </div>}</>
    );
};

export default Product;