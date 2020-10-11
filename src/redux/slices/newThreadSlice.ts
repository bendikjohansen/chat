import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { User } from "./userSlice";

interface NewThreadState {
  members: User[]
};

const initialState: NewThreadState = {
  members: [],
};

export const newThreadSlice = createSlice({
  name: "newThread",
  initialState,
  reducers: {
    setMembers: (state, { payload }: PayloadAction<User[]>) => {
      state.members = payload;
    },
    submit: (state) => {
      state.members = [];
    }
  },
});

export const { setMembers, submit } = newThreadSlice.actions;

export const selectMembers = (state: RootState) => state.newThread.members;

export default newThreadSlice.reducer;
