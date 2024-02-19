import React, { useState } from 'react'

function AddTodo() {
    const [input,setInput] = useState('');
    const handlesubmit = (e) =>{
        e.preventDefault()
    }
  return (
    <form onSubmit={handlesubmit}>
      <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
    </form>
  )
}

export default AddTodo
