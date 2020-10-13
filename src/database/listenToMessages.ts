import firebase from "firebase/app";
import "firebase/firestore";
import { Message } from "../app/slices/messageSlice";

const listenToMessages = (threadId: string, callback: (messages: Message[]) => void) =>
  firebase
    .firestore()
    .collection(`threads/${threadId}/messages`)
    .onSnapshot((response) => {
      const messages = response.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as Message)
      );
      callback(messages);
    });

export default listenToMessages;
