import { createSlice } from '@reduxjs/toolkit';
import { createDateIdByObject, createDateIdByPrimitives } from '../model/date/createDateId';

export interface CalendarState {
  dateId: string;
}

const initialState: CalendarState = {
  dateId: createDateIdByObject(new Date()),
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    getPreviousMonthDateId: (state) => {
      const currentDateObject = new Date(state.dateId);
      const year = currentDateObject.getFullYear();
      const month = currentDateObject.getMonth();

      state.dateId = createDateIdByPrimitives(year, month - 1, 1);
    },
    getNextMonthDateId: (state) => {
      const currentDateObject = new Date(state.dateId);
      const year = currentDateObject.getFullYear();
      const month = currentDateObject.getMonth();
      
      state.dateId = createDateIdByPrimitives(year, month + 1, 1);
    },
  },
})

export const { getPreviousMonthDateId, getNextMonthDateId } = calendarSlice.actions;

export const { reducer: calendarReducer } = calendarSlice;
