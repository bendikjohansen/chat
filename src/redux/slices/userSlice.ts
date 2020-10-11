import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllUsers } from "../../database";
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

export const fetchUsers = (): AppThunk => async (dispatch) => {
  const users = await fetchAllUsers();
  dispatch(setUsers(users));
};

export const selectUsers = (state: RootState) => state.users.list;

export default threadSlice.reducer;
