import { createSlice } from "@reduxjs/toolkit";

export type AllThreads ={
  profile_pic: string;
  userName: string;
  caption: string;
  id: string;
}

const initialState:{threads:AllThreads[]} = {
  threads: [] as AllThreads[]
}

export const slice = createSlice({
  name: 'threads',
  initialState,
  reducers:{
    setThreads:(state,action)=>{
      state.threads = action.payload
    }
  }
})

export const {setThreads} = slice.actions

export default slice.reducer