import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { User } from "../redux/slices/authSlice";

const createThread = async (users: User[]) => {
  await firebase.database().ref(`threads`).push({
    name: users.map(user => user.name).sort().join(', '),
    members: users.map(u => u.id)
  });
};

export default createThread;
