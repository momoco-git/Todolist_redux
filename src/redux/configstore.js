// import { createStore, combineReducers } from "redux";

// import todo from "./modules/todo";

// const rootReducer = combineReducers({ todo });

// const store = createStore(rootReducer);
import {configureStore} from "@reduxjs/toolkit"
import todoSlice from './modules/todoSlice';
const store = configureStore({reducer:{
    todo : todoSlice
}})

export default store;