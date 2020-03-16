import React, { useState, useReducer } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css';
import { noteReducer, initialState } from "../reducers/titleReducer";



function App() {
  const [state,dispatch] = useReducer(noteReducer,initialState)
  // const [state,setState] = useState({
  //   todo: list,
  //   task: ""
  // })

  // const toggleCompleted = clickedItemId => {
  //   setState({
  //     todo: state.todo.map(task => {
  //       if (task.id === clickedItemId) {
  //         return {
  //           ...task,
  //           completed: !task.completed
  //         };
  //       } else {
  //         return task;
  //       }
  //     })
  //   });
  // };

  const clearCompleted = e => {
    setState({
      todo: state.todo.filter(task => (task.completed !== true))
    });
    console.log("cleared")
  }

  const addTask = taskName => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false
    };
    setState({
      todo: [...state.todo, newTask]
    });
  };


  return (
    <div className="todoList">
        <h2>Welcome to your Todo App!</h2>
      <TodoList todo={state.todo} toggleCompleted={() =>dispatch({ type: "TOGGLE_COMPLETED"})} clearCompleted={clearCompleted}/>
      <TodoForm addTask={addTask} />
      </div>
  );
}

export default App;
