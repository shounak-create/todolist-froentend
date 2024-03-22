import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
  
  export const fetchdata = createAsyncThunk('todo/fetchdata', async()=>{
    try {
        const response = await axios.get('http://localhost:8000/todo/gettodos');
        return response.data
    } catch (error) {
        console.log(error.message);
    }
  }
  )

  export const SendData = createAsyncThunk('todo/senddata',async(data)=>{
    try {
        const response = await axios.post('http://localhost:8000/todo/addtodo',{data});
                
    } catch (error) {
        console.log(error.message);
    }
  })

  export const DeleteData = createAsyncThunk('todo/deletedaa',async(id)=>{
    try{
      const res = await axios.delete(`http://localhost:8000/todo/deletetodo/${id}`);
    } catch(error){
      console.log(error.message);
    }
  })

  export const completedtask = createAsyncThunk('todo/completetask',async(data)=>{
    try{
      const res = await axios.put('http://localhost:8000/todo/completetask',{data});
    } catch(error){
      console.log(error.message);
    }
  })

  const todoSlice = createSlice({
    name:"todos",
    initialState:{
        data:[],
        message:""
    },
    reducers:{

    },
    extraReducers:(builder) =>{
        builder
        .addCase(fetchdata.fulfilled,(state, action)=>{
            state.data = action.payload;
            state.message = "Data received from backend."
        })
        .addCase(SendData.fulfilled,(state, action)=>{
            state.message = "data sent to backend"
        })
        .addCase(DeleteData.fulfilled,(state,action)=>{
          state.message = "data deleted from backend"
        })
        .addCase(completedtask.fulfilled,(state,action)=>{
          state.message = "task has been completed"
        })        
    }
  })
//   export const { fetchdata } = dataSlice.actions;
export default todoSlice.reducer;
