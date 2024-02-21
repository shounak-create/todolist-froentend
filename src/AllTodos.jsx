import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from './redux/reducers/todoreducer';

function AllTodos() {
    const data = useSelector(state => state.todo.data)
    const dispatch = useDispatch();
    console.log(data);

    useEffect(()=>{
        dispatch(fetchdata());
    },[dispatch]);

    return (
        <div>
            {data.map((todo) => (
                <div>
                    <h1>{todo.data}</h1>
                </div>
            ))}
        </div>
    );
}

export default AllTodos;
