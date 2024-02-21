import logo from './logo.svg';
import './App.css';
import AddTodo from './AddTodo';
import { useEffect, useState } from 'react';
import AllTodos from './AllTodos';

function App() {
  return (
    <div>
      <AddTodo />
      <AllTodos />
    </div>
  );
}

export default App;
