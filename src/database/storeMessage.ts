import firebase from "firebase/app";
import "firebase/database";
import { User } from "../redux/slices/userSlice";

const storeMessage = async (threadId: string, content: string, user: User) => {
  await firebase.database().ref(`messages/${threadId}`).push({
    userId: user.id,
    timestamp: Date.now(),
    content,
  });
};

export default storeMessage;
