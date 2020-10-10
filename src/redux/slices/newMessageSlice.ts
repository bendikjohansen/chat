import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface NewMessageState {
  [userId: string]: string;
}

const initialState: NewMessageState = {};

export const newMessageSlice = createSlice({
  name: "newMessage",
  initialState,
  reducers: {
    setNewMessage: (state, { payload }: PayloadAction<{userId: string, content: string}>) => {
      state[payload.userId] = payload.content;
    },
  },
});

export const { setNewMessage } = newMessageSlice.actions;

export const selectNewMessage = (userId: string) => (state: RootState) => state.newMessages[userId];

export default newMessageSlice.reducer;
