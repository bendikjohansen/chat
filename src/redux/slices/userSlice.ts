import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { readAllThreads } from "../../database";
import { AppThunk, RootState } from "../store";

export interface User {
  id: string;
  name: string;
  profilePicture: string;
}

interface ThreadState {
  list: User[];
}

const initialState: ThreadState = {
  list: [],
};

export const threadSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, { payload }: PayloadAction<User[]>) => {
      state.list = payload;
    },
  },
});

export const { setUsers } = threadSlice.actions;

export const fetchThreads = (): AppThunk => async (dispatch) => {
  const users = await readAllThreads();
  dispatch(setUsers(users));
};

export const selectThreads = (state: RootState) => state.users.list;

export default threadSlice.reducer;
