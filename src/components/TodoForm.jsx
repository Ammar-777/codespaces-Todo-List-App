import React from 'react'
import { useState } from 'react'

const TodoForm = () => {
    const [todo, setTodo] = useState('')
    const handleTodo = (e) => {
        setTodo(e.target.value)
    }

    const addTodo = () => {

    }
  return (
    <div>
        <h1>Todo App</h1>
        <form>
            <input type='text' placeholder='Write Your todos' value={todo} onChange={handleTodo} />
            <button onClick={addTodo}>Add Todo</button>
        </form>
    </div>
  )
}

export default TodoForm