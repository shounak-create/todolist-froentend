import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchdata,DeleteData } from './redux/reducers/todoreducer';

function AllTodos() {
    const data = useSelector(state => state.todo.data)
    const [count,setCount]= useState(0)
    const dispatch = useDispatch();
    console.log(data);

    useEffect(()=>{
        dispatch(fetchdata());
    },[dispatch]);

    function deletetask(e){
        console.log(e);
        window.location.reload();
        dispatch(DeleteData(e))
    }

    return (
        <div>
            {data.map((todo) => (
                <div key={todo._id}>
                    <h1>{todo.data}</h1>
                    <button onClick={() => deletetask(todo._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default AllTodos;
