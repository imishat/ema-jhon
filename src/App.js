
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  const [cetagory, setCetagory] = useState([])
  const [activeItem,setActiveItem]=useState()
  const getCetagory=(cetagory)=>{
    
    setCetagory(cetagory)
    
  }
  const getActiveItem = (activeItem) => {
    setActiveItem(activeItem)
  }
//  console.log(activeItem)
  
  return (
    <div>
      <Header menu={cetagory} getActiveItem={getActiveItem }></Header>
      <Shop getCetagory={getCetagory} activeItem={activeItem} ></Shop>
     
     
    </div>
  );
}

export default App;
