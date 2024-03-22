import React, { useState } from 'react'
import axios from 'axios';

function Signup() {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    async function Submit_form(e){
      e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8000/todo/signup',{username,password});
            window.location.href = '/addtodos';
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
    <form onSubmit={Submit_form}>
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Signup
