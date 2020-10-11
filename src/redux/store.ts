import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import threadReducer from './slices/threadSlice';
import composerReducer from './slices/composerSlice';
import newThreadReducer from './slices/newThreadSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    threads: threadReducer,
    composer: composerReducer,
    newThread: newThreadReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
