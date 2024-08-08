import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  firstName: string;
  email: string;
  password: string;
}

const initialState: UserState = {
  firstName: '',
  email: '',
  password: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload.firstName
    },
    setEmail: (state, action) => {
      state.email = action.payload.email
    },
    setPassword: (state, action) => {
      state.password = action.payload.password
    }
  },
});

export const { setFirstName, setEmail, setPassword } = userSlice.actions;

export const { reducer: userReducer } = userSlice;
