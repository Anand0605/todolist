import React from 'react'
import { useState } from 'react'

const InputTodo = (props) => {
const [inputTodo, setInputTodo] = useState('')

    return (
        <div>
            <input
             type="text" 
             placeholder='write to do...'
             value={inputTodo}
             onChange={(e)=>{setInputTodo(e.target.value)}}
             />
            <button onClick={()=>{
                props.addList(inputTodo)
                 setInputTodo("")}}> Add todo</button>
            {/* <div>{inputTodo}</div> */}
        </div>
    )
}

export default InputTodo