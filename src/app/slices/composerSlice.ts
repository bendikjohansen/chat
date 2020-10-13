import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ComposerState {
  [threadId: string]: string;
}

interface ComposerPayload {
  threadId: string,
  content: string
};

const initialState: ComposerState = {};

export const composerSlice = createSlice({
  name: "composer",
  initialState,
  reducers: {
    change: (state, { payload }: PayloadAction<ComposerPayload>) => {
      state[payload.threadId] = payload.content;
    },
    submit: (state, { payload }: PayloadAction<string>) => {
      state[payload] = '';
    }
  },
});

export const { change, submit } = composerSlice.actions;

export const selectMessage = (threadId: string) => (state: RootState) => state.composer[threadId];

export default composerSlice.reducer;
