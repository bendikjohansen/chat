import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllThreads } from "../../database";
import { AppThunk, RootState } from "../store";

export interface Thread {
  id: string;
  name: string;
  profilePicture: string;
}

interface ThreadState {
  list: Thread[] | null;
  current: string | null;
}

const initialState: ThreadState = {
  list: null,
  current: null,
};

export const threadSlice = createSlice({
  name: "threads",
  initialState,
  reducers: {
    setThreads: (state, { payload }: PayloadAction<Thread[]>) => {
      state.list = payload;
    },
    setCurrentThread: (state, { payload }: PayloadAction<string>) => {
      state.current = payload;
    },
    resetCurrentThread: (state) => {
      state.current = initialState.current;
    }
  },
});

export const { setThreads, setCurrentThread, resetCurrentThread } = threadSlice.actions;

export const fetchThreads = (): AppThunk => async (dispatch) => {
  const threads = await fetchAllThreads();
  dispatch(setThreads(threads));
};

export const selectThreads = (state: RootState) => state.threads.list;
export const selectCurrentThread = (state: RootState) => state.threads.list?.find(thread => thread.id === state.threads.current);

export default threadSlice.reducer;
