import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
  authenticationModalVisible: boolean;
}

const initialState: ModalState = {
  authenticationModalVisible: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setAuthenticationModalVisible: (state) => {
      state.authenticationModalVisible = true;
    },
    setAuthenticationModalInvisible: (state) => {
      state.authenticationModalVisible = false;
    },
  },
});

export const {
  setAuthenticationModalVisible, setAuthenticationModalInvisible,
} = modalSlice.actions;

export const { reducer: modalReducer } = modalSlice;
