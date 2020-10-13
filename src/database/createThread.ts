import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { User } from "../app/slices/userSlice";

const createThread = async (users: User[]) => {
  const response = await firebase.firestore().collection(`threads`).add({
    members: users.map(u => u.id)
  });

  return response.id;
};

export default createThread;
