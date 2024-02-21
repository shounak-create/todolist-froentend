import { configureStore } from "@reduxjs/toolkit";

import todoReducer from './reducers/todoreducer';
import { combineReducers } from 'redux';


export const todoStore = configureStore({
    reducer:{
        todo:todoReducer,
    }
});
