import logo from './logo.svg';
import './App.css';
import AddTodo from './AddTodo';
import { useEffect, useState } from 'react';
import AllTodos from './AllTodos';
import CompletedTodos from './CompletedTodos';

function App() {
  return (
    <div>
      <AddTodo />
      <AllTodos />
      <CompletedTodos />
    </div>
  );
}

export default App;
