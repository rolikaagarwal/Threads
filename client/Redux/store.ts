import { configureStore } from "@reduxjs/toolkit";
import ThreadReducer from "./threadSlice";
import UserReducer from './userSlice'

const store = configureStore({
  reducer:{
    thread: ThreadReducer,
    user: UserReducer
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store