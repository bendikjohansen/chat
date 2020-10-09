import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../redux/store";
import firebase from "firebase/app";
import "firebase/database";

export interface Contact {
  id: string;
  name: string;
  profilePicture: string;
}

interface ContactState {
  contacts: Contact[] | null;
  current: Contact | null;
}

const initialState: ContactState = {
  contacts: null,
  current: null,
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, { payload }: PayloadAction<Contact[]>) => {
      state.contacts = payload;
    },
    setCurrent: (state, { payload }: PayloadAction<string>) => {
      const currentContact = state.contacts?.find(contact => contact.id === payload) ?? null;
      state.current = currentContact;
    }
  },
});

export const { setContacts, setCurrent } = contactSlice.actions;

export const fetchContacts = (): AppThunk => async (dispatch) => {
  const response = await firebase.database().ref('users').once('value');
  const contacts = Object.values(response.val()) as Contact[];
  dispatch(setContacts(contacts));
};

export const selectContacts = (state: RootState) => state.contacts.contacts;
export const selectCurrent = (state: RootState) => state.contacts.current;

export default contactSlice.reducer;
