import logo from './logo.svg';
import './App.css';
import AddTodo from './AddTodo';
import { useEffect, useState } from 'react';
import AllTodos from './AllTodos';
import CompletedTodos from './CompletedTodos';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Signup';
import Login from './Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/addtodos" element={<AddTodo />} />
          <Route path="/alltodos" element={<AllTodos />} />
          <Route path="/completed" element={<CompletedTodos />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
