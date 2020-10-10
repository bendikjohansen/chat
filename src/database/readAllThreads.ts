import { Thread } from "../redux/slices/threadSlice";
import firebase from "firebase/app";
import "firebase/database";

const readAllThreads = async (): Promise<Thread[]> => {
  const response = await firebase.database().ref('users').once('value');
  const users = Object.values(response.val()) as Thread[];
  return users;
}

export default readAllThreads;
