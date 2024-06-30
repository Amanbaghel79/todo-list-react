import React, { useState } from 'react'

function Todoinput(props) {
    const [inputtext,setinputtext]=useState();
    function eventchange(e) {
        setinputtext(e.target.value);
    }
  return (
    <div className="input-container">
      <input type="text" placeholder='task' value={inputtext} className='input-box-todo' onChange={eventchange}/>
      <button className='add-btn' onClick={()=>{
        props.it(inputtext)
        setinputtext("")
      }}>+</button>
    </div>
  )
}

export default Todoinput
