import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
  authenticationModalVisible: boolean;
  createEventModalVisible: boolean;
}

const initialState: ModalState = {
  authenticationModalVisible: false,
  createEventModalVisible: false,
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

    setCreateEventModalVisible: (state) => {
      state.createEventModalVisible = true;
    },
    setCreateEventModalInvisible: (state) => {
      state.createEventModalVisible = false;
    },
  },
});

export const {
  setAuthenticationModalVisible, setAuthenticationModalInvisible,
  setCreateEventModalVisible, setCreateEventModalInvisible,
} = modalSlice.actions;

export const { reducer: modalReducer } = modalSlice;
