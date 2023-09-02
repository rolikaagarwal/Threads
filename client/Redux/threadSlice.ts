import { ThreadType } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState:{threadsFeed: ThreadType[] } = {
  threadsFeed: [] as ThreadType[]
}

export const slice = createSlice({
  name: 'thread',
  initialState,
  reducers:{
    setThreadsFeed:(state,action)=>{
      state.threadsFeed = action.payload
    }
  }
})

export const {setThreadsFeed} = slice.actions

export default slice.reducer