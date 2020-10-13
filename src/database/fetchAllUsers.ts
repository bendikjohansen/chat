import firebase from "firebase/app";
import "firebase/firestore";
import { User } from "../app/slices/userSlice";

const fetchAllUsers = async (): Promise<User[]> => {
  const response = await firebase.firestore().collection('users').get();
  const users = response.docs.map(user => ({
    id: user.id,
    ...user.data()
   }) as User);
  return users;
}

export default fetchAllUsers;
