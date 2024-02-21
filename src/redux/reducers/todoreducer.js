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
        
    }
  })
//   export const { fetchdata } = dataSlice.actions;
export default todoSlice.reducer;
