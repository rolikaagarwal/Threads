import { post } from '@/lib/apiFunctions';
import { LOGIN_URL } from '@/lib/endpoints';
import { LoginFormType } from '@/lib/types';
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    token: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setUser, setToken } = slice.actions;

export default slice.reducer;


export const loginUser = async({ username, password }:LoginFormType) => {
  try {
    const response = await post(LOGIN_URL,{email:username,password})
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Login failed');
    }
    const user = await response.json();
    
  } catch (error) {
    throw error;
  }
};