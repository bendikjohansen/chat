import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DatabaseThread } from "../../database/listenToThreads";
import { convertThread } from "../converters";
import { RootState } from "../store";
import { User } from "./userSlice";

export interface Thread {
  id: string;
  name: string;
  users: User[];
}

interface ThreadState {
  list: Thread[] | null;
  current: string | null;
}

const initialState: ThreadState = {
  list: null,
  current: null,
};

interface SetThreadsPayload {
  threads: DatabaseThread[];
  loggedOnUser: User;
  members: User[];
}

export const threadSlice = createSlice({
  name: "threads",
  initialState,
  reducers: {
    setThreads: (state, { payload }: PayloadAction<SetThreadsPayload>) => {
      const { loggedOnUser, members } = payload;
      const convert = (thread: DatabaseThread) =>
        convertThread(thread, loggedOnUser, members);
      const threads = payload.threads.map(convert);

      state.list = threads;
    },
    setCurrentThread: (state, { payload }: PayloadAction<string>) => {
      state.current = payload;
    },
    resetCurrentThread: (state) => {
      state.current = initialState.current;
    },
  },
});

export const {
  setThreads,
  setCurrentThread,
  resetCurrentThread,
} = threadSlice.actions;

export const selectThreads = (state: RootState) => state.threads.list;
export const selectCurrentThread = (state: RootState) =>
  state.threads.list?.find((thread) => thread.id === state.threads.current);

export default threadSlice.reducer;
