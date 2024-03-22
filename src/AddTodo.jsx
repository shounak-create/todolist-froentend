import React, { useState } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { todoSlice, SendData} from './redux/reducers/todoreducer'
import { Link } from 'react-router-dom';


function AddTodo() {
    const dispatch = useDispatch();
    const [input,setInput] = useState('');
    const handlesubmit = (e) =>{
        dispatch(SendData(input))
        setInput('')
    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
      </form>

      <div>
        <Link to="/alltodos">All Todos</Link>
        <Link to="/alltodos">Current todos</Link>
        <Link to="/completed">completed todos</Link>
      </div>

    </div>
    
  )
}

export default AddTodo
