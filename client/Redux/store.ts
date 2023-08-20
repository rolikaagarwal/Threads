import { configureStore } from "@reduxjs/toolkit";
import ThreadReducer from "./threadSlice";

const store = configureStore({
  reducer:{
    threads: ThreadReducer
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store