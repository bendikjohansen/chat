import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import threadReducer from './slices/threadSlice';
import newMessageReducer from './slices/newMessageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    threads: threadReducer,
    newMessages: newMessageReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
