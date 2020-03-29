import React, { useState, useReducer } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css';
import { noteReducer, initialState } from "./reducers/noteReducer";



function App() {
  const [state,dispatch] = useReducer(noteReducer,initialState)

  return (
    <div className="todoList">
        <h2>Welcome to your Todo App!</h2>
      <TodoList todo={state.todo} dispatch={dispatch}/>
      <TodoForm dispatch={dispatch} />
      </div>
  );
}

export default App;
