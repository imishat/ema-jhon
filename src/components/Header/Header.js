import React from 'react';
import"./Header.css"
import logo from'../../images/Logo.svg'
import Product from '../Product/Product';
import { useState } from 'react';

const Header = ({menu,getActiveItem}) => {
   console.log(menu)
    const [item,setItem]=useState()
   const [activeItem,setActiveItem]=useState()

    console.log(activeItem)
    getActiveItem(activeItem)
//   console.log(value)
    let categorys =[]
    menu.forEach((item) => {
    categorys.push(item.category)
    })
    console.log(categorys)
   let filteredCategory =[...new Set(categorys)]
    console.log(filteredCategory)
 
    // let arr= []
    // for (const key in menu) {
    //     arr.push({ ...menu[key] })

    // }  
    // // console.log(arr)
    // let items;
    //         arr.forEach((item) => {
    //       items = item
    //         })
    // let categorys =[]
    // for (const key in items) {
    //         categorys.push(items[key].category)
    // }
    // // console.log(categorys)
    // let filteredCategory =[...new Set(categorys)]
    // console.log(filteredCategory)

    
   
    
    return (
        <div className='header'>
            <div className="">
                <img src={logo}alt="" srcset="" />
            </div>
            <div>
                {filteredCategory.map(category => (
                    <a href="#" onClick={() => {
                        setActiveItem(category)
                    }}>{ category}</a>
             ))}
            </div>


        </div>
    );
};

export default Header;