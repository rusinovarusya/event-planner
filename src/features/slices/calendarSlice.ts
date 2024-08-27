import { createSlice } from '@reduxjs/toolkit';
import { createDateId } from '../model/date/createDateId';
import moment from 'moment';

export interface CalendarState {
  dateId: string;
}

const initialState: CalendarState = {
  dateId: createDateId(moment()),
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    getPreviousMonthDateId: (state) => {
      const currentDateObject = moment(state.dateId);
      state.dateId = createDateId(currentDateObject.subtract(1, 'month'));
    },
    getNextMonthDateId: (state) => {
      const currentDateObject = moment(state.dateId);
      state.dateId = createDateId(currentDateObject.add(1, 'month'));
    },
  },
})

export const { getPreviousMonthDateId, getNextMonthDateId } = calendarSlice.actions;

export const { reducer: calendarReducer } = calendarSlice;
