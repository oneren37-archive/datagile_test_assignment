import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from '../features/counter/CounterSlice';

export const store = configureStore({
  reducer: CounterReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
