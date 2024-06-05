import React, { useState } from 'react'
import InputTodo from './components/InputTodo'
import TodoList from './components/TodoList'
import './App.css'

const App = () => {
 
  const [todoList,setTodoList] = useState([])

const addList = (inputTodo)=>{
  setTodoList([...todoList,inputTodo])
}

const deleteItem = (key)=>{
  const newTodo = [...todoList]
  newTodo.splice(key,1)
  setTodoList([...newTodo])
}

  return (
    <>
    <InputTodo addList={addList}/>
    <h1 className="app-heading">Todo</h1>
    <hr />
    {
      todoList.map((listItem ,i)=>{
        return(
          <TodoList key={i}index={i} item={listItem} deleteValue={deleteItem}/>
        )
      })
    }
    </>
    
  )
}

export default App