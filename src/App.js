
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  const [catagory,setCetagory]=useState([])
  const getCetagory=(cetagory)=>{
    setCetagory(cetagory)
    
  }
  //console.log(catagory)
  
  return (
    <div>
      <Header menu={catagory}></Header>
     
     <Shop getCetagory={getCetagory}/>
    </div>
  );
}

export default App;
