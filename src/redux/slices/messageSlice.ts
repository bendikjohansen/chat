import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import fetchAllMessages from "../../database/fetchAllMessages";
import { AppThunk, RootState } from "../store";

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
      state.list = payload;
    },
    clearMessages: (state) => {
      state.list = initialState.list;
    }
  },
});

export const { setMessages, clearMessages } = messageSlice.actions;

export const fetchMessages = (threadId: string): AppThunk => async (dispatch) => {
  const messages = await fetchAllMessages(threadId);
  dispatch(setMessages(messages));
}

export const selectThreadMessages = (state: RootState) => state.messages.list;

export default messageSlice.reducer;
