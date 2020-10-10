import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface NewMessageState {
  [userId: string]: string;
}

interface NewMessagePayload {
  userId: string,
  content: string
};

const initialState: NewMessageState = {};

export const newMessageSlice = createSlice({
  name: "newMessage",
  initialState,
  reducers: {
    setNewMessage: (state, { payload }: PayloadAction<NewMessagePayload>) => {
      state[payload.userId] = payload.content;
    },
    submit: (state, { payload }: PayloadAction<string>) => {
      state[payload] = '';
    }
  },
});

export const { setNewMessage, submit } = newMessageSlice.actions;

export const selectNewMessage = (userId: string) => (state: RootState) => state.newMessages[userId];

export default newMessageSlice.reducer;
