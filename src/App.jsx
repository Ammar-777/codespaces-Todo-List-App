import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([])
  const addTodo =(newTodo) => {
    setTodos([...todos, newTodo])
  }
  const toggleTodo = (index) => {
    const updatedTodos = [...todos];

    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  }
  return (
    <div className="App">
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos}
      toggleTodo={toggleTodo}/>
    </div>
  );
}

export default App;
