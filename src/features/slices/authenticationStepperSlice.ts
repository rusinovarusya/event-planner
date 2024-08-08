import { createSlice } from '@reduxjs/toolkit';

export interface AuthenticationStepperState {
  activeStep: 'email' | 'password' | 'registration';
  email: string;
}

const initialState: AuthenticationStepperState = {
  activeStep: 'email',
  email: ''
}

export const authenticationStepperSlice = createSlice({
  name: 'authenticationStepper',
  initialState,
  reducers: {
    switchToPasswordStep: (state) => {
      state.activeStep = 'password'
    },
    switchToRegistrationStep: (state) => {
      state.activeStep = 'registration'
    },
    switchToEmailStep: (state) => {
      state.activeStep = 'email'
    },
  },
})

export const { switchToPasswordStep, switchToRegistrationStep, switchToEmailStep } = authenticationStepperSlice.actions;

export const { reducer: authenticationStepperReducer } = authenticationStepperSlice;
