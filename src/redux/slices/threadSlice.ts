import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllThreads } from "../../database";
import { AppThunk, RootState } from "../store";
import { User } from "./userSlice";

export interface Thread {
  id: string;
  name: string;
  members: string[];
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

export const fetchThreads = (user: User, users: User[]): AppThunk => async (dispatch) => {
  const threads = await fetchAllThreads();
  const threadsWithNames = threads.map(thread => {
    if (thread.name) {
      return thread;
    }
    const otherUsers = thread.members.filter(id => id !== user.id).map(userId => users.find(user => userId === user.id) as User);
    const threadName = otherUsers.map(user => user?.name.split(' ')[0]).join(', ');
    return {
      ...thread,
      name: threadName,
      users: otherUsers,
    };
  })
  dispatch(setThreads(threadsWithNames));
};

export const selectThreads = (state: RootState) => state.threads.list;
export const selectCurrentThread = (state: RootState) => state.threads.list?.find(thread => thread.id === state.threads.current);

export default threadSlice.reducer;
