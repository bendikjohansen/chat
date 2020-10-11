import firebase from "firebase/app";
import "firebase/database";
import { Thread } from "../redux/slices/threadSlice";

interface DatabaseThread {
  [id: string]: Thread
}

const fetchAllThreads = async (): Promise<Thread[]> => {
  const response = await firebase.database().ref('threads').once('value');
  const responseValue = response.val();
  if (!responseValue) {
    return [];
  }
  const entries = Object.entries(responseValue as DatabaseThread);
  const threads = entries.map(([id, thread]) => ({...thread, id}));
  return threads;
}

export default fetchAllThreads;
