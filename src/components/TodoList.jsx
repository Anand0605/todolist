import React from 'react'

const TodoList = (props) => {
  return (
    <div>
        <li className='list-item'>
            {props.item}
        <span className='icons'><i class="fa-solid fa-trash icon-delete" onClick={()=>{props.deleteValue(props.index)}}></i></span>
        </li>
        
    </div>
  )
}

export default TodoList