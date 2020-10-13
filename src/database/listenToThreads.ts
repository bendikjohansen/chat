import firebase from "firebase/app";
import "firebase/firestore";

export interface DatabaseThread {
  id: string;
  name: string;
  members: string[];
}

const listenToThreads = (
  userId: string,
  callback: (threads: DatabaseThread[]) => void
) =>
  firebase
    .firestore()
    .collection("threads")
    .where("members", "array-contains", userId)
    .onSnapshot((response) => {
      const threads = response.docs.map(
        (t): DatabaseThread => ({
          ...(t.data() as DatabaseThread),
          id: t.id,
        })
      );

      callback(threads);
    });

export default listenToThreads;
