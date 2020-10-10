import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { readAllThreads } from "../../database";
import { AppThunk, RootState } from "../store";

export interface Thread {
  id: string;
  name: string;
  profilePicture: string;
}

interface ThreadState {
  list: Thread[] | null;
  current: Thread | null;
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
    setCurrent: (state, { payload }: PayloadAction<string>) => {
      const currentThread = state.list?.find(thread => thread.id === payload) ?? null;
      state.current = currentThread;
    }
  },
});

export const { setThreads, setCurrent } = threadSlice.actions;

export const fetchThreads = (): AppThunk => async (dispatch) => {
  const threads = await readAllThreads();
  dispatch(setThreads(threads));
};

export const selectThreads = (state: RootState) => state.threads.list;
export const selectCurrent = (state: RootState) => state.threads.current;

export default threadSlice.reducer;
