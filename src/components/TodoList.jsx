import React from 'react'

const TodoList = ({todos}) => {
  return (
    <div>
        <h2>Todo List</h2>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList