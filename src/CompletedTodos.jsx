import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchdata,DeleteData,completedtask } from './redux/reducers/todoreducer';


function CompletedTodos() {

    const data = useSelector(state => state.todo.data)
    const completed_todos = data.filter((todo)=> todo.completed)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchdata());
    },[dispatch]);

    function deletetask(e){
        console.log(e);
        window.location.reload();
        dispatch(DeleteData(e))
    }

    function completed(e){
        console.log(e);
        window.location.reload();
        dispatch(completedtask(e))
    }

    return (
        <div>
            {completed_todos.map((todo) => (
                <div key={todo._id}>
                    <input
                        type="checkbox"
                        value="option1"
                        checked={todo.completed ? true : false}
                        onChange={()=>completed(todo._id)}
                    />
                    <h1>{todo.data}</h1>
                    <button onClick={() => deletetask(todo._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default CompletedTodos
