import { post } from '@/lib/apiFunctions';
import { LOGIN_URL, SIGNUP_URL } from '@/lib/endpoints';
import { LoginFormType, SignupFormType } from '@/lib/types';
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

export const createUser = async({ username, password,fullName }:SignupFormType) => {
  try {
    const response = await post(SIGNUP_URL,{email:username,password,fullName})
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Signup failed');
    }
    const user = await response.json();
    
  } catch (error) {
    throw error;
  }
};