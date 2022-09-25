import React from 'react';
import"./Header.css"
import logo from'../../images/Logo.svg'
import Product from '../Product/Product';

const Header = ({menu}) => {
    console.log(menu)
    
    return (
        <div className='header'>
            <div className="">
                <img src={logo}alt="" srcset="" />
            </div>
            <div>
               <a href="">Home</a>
               <a href="">Orders</a>
               <a href="">Inventory</a>
               <a href="">About</a>
            </div>


        </div>
    );
};

export default Header;