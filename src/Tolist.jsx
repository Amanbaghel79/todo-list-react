import React from 'react'

function Tolist(props) {
  return (
    <div>
      <li className="list-item">
        {props.items}
        <span className='icons'>
        <i class="fa-solid fa-trash-can icon-delete" onClick={()=>{
            props.dele(props.index);
        }
        }></i>
        </span>
      </li>
    </div>
  )
}

export default Tolist
