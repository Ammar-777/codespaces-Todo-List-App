import React from 'react'
import { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState('')
    const handleTodo = (e) => {
      e.preventDefault()
        setTodo(e.target.value)
    }

    const handleAddTodo = (e) => {
      e.preventDefault();
      if (todo.trim() !== '')
      {
        addTodo({ title:todo, completed: false});
        setTodo('')
      }
    }
  return (
    <div>
        <h1>Todo App</h1>
        <form>
            <input type='text' placeholder='Write Your todos' value={todo} onChange={handleTodo} />
            <button onClick={handleAddTodo}>Add Todo</button>
        </form>
    </div>
  )
}

export default TodoForm