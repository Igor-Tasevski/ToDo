import { useState } from 'react';
import React from 'react'
import ToDoForm from './ToDoForm'
import ToDoTasks from './ToDoTasks';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (value) => {

    // we compare here the text with the current value we are entering
    const filteredTodos = todos.filter((todo) => todo.title !== value.title)
    //setTodos([value, ...todos])
    setTodos([value, ...filteredTodos])
  };


  const updateTodo = (todoId, newValue) => {
    setTodos(todos.map((todo) => (todo.id === todoId ? newValue : todo)));
  };

  return (
    <div>
      <ToDoForm handleAddTodo={addTodo} />

      <ToDoTasks todos={todos} updateTodo={updateTodo} />
      {/*{todos.map((todo, i) => (
        <p key ={i}>{ todo}</p>
      ))} */}

      {/* After we enter title:input in todo form*/}

      {/*This will be created in separated form 
      {todos.map((todo) => (
        <p key={todo.i}>{todo.title} {todo.completed?'✅' :'❌'}</p>

      ))}
        */}
    </div>
  )
}

export default TodoList