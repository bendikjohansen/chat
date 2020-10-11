import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { User } from "../redux/slices/userSlice";

const createThread = async (users: User[]) => {
  await firebase.database().ref(`threads`).push({
    members: users.map(u => u.id)
  });
};

export default createThread;
