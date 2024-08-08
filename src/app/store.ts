import { configureStore } from '@reduxjs/toolkit';
import { calendarReducer } from '../features/slices/calendarSlice';
import { modalReducer } from '../features/slices/modalSlice';
import { userReducer } from '../features/slices/userSlice';
import { authenticationStepperReducer } from '../features/slices/authenticationStepperSlice';
import { publicUserPlannerApi } from '../shared/api/publicUserPlannerApi';

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    modal: modalReducer,
    authenticationStepper: authenticationStepperReducer,
    user: userReducer,
    [publicUserPlannerApi.reducerPath]: publicUserPlannerApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat([
      publicUserPlannerApi.middleware,
    ])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
