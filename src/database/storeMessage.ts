import firebase from "firebase/app";
import "firebase/firestore";
import { User } from "../app/slices/userSlice";

const storeMessage = async (threadId: string, content: string, user: User) => {
  await firebase.firestore().collection(`threads/${threadId}/messages`).add({
    userId: user.id,
    timestamp: Date.now(),
    content,
  });
};

export default storeMessage;
