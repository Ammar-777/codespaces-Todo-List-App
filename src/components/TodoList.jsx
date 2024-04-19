import React from 'react'

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}
            style={{
              textDecoration:
                todo.completed ? 'line-through' : 'none'
            }}
            onClick={() => toggleTodo(index)}>
            {todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList