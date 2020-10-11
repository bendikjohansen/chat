import firebase from "firebase/app";
import "firebase/database";
import { Message } from "../redux/slices/messageSlice";

interface DatabaseMessage {
  [id: string]: Message
}

const fetchAllMessages = async (threadId: string): Promise<Message[]> => {
  const response = await firebase.database().ref(`messages/${threadId}`).once('value');
  const responseValue = response.val();
  if (!responseValue) {
    return [];
  }
  const entries = Object.entries(responseValue as DatabaseMessage);
  const messages = entries.map(([id, message]) => ({...message, id}));
  return messages;
}

export default fetchAllMessages;
