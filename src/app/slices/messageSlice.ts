import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Message {
  id: string,
  content: string,
  timestamp: number,
  userId: string,
}

interface MessageState {
  list: Message[]
};

const initialState: MessageState = {
  list: [],
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessages: (state, { payload }: PayloadAction<Message[]>) => {
      state.list = payload.sort((a, b) => a.timestamp - b.timestamp);
    },
    clearMessages: (state) => {
      state.list = initialState.list;
    }
  },
});

export const { setMessages, clearMessages } = messageSlice.actions;

export const selectThreadMessages = (state: RootState) => state.messages.list;

export default messageSlice.reducer;
