import { useState } from 'react'
import './App.css'
import Todoinput from './Todoinput'
import Tolist from './Tolist';
function App() {
  const [Items,setItems]=useState([]);
  let addlist=(inputtext)=>{
    if(inputtext!=="")
    setItems([...Items,inputtext]);
  }
  let deleteitems=(key)=>{
    let newarr=[...Items];
    newarr.splice(key,1);
    setItems([...newarr])
  }
  return (
   <div className='main-container'>
    <div className='center-container'>
      <Todoinput it={addlist}/>
      <h1 className="app-heading">TODO</h1>
      {Items.map((listitems,i)=>{
         return (
          <Tolist key={i} index={i} items={listitems} dele={deleteitems}/>
         )
      })
      }
    </div>
   </div>
  )
}

export default App
