import React, { useState } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { todoSlice, SendData} from './redux/reducers/todoreducer'


function AddTodo() {
    const dispatch = useDispatch();
    const [input,setInput] = useState('');
    const handlesubmit = (e) =>{
        dispatch(SendData(input))
        setInput('')
    }
  return (
    <form onSubmit={handlesubmit}>
      <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
    </form>
  )
}

export default AddTodo
