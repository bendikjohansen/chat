import firebase from "firebase/app";
import "firebase/database";

const storeMessage = async (threadId: string, content: string) => {
  await firebase.database().ref(`threads/${threadId}/messages`).push(content);
};

export default storeMessage;
