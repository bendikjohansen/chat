import firebase from "firebase/app";
import "firebase/database";
import { User } from "../redux/slices/userSlice";

const fetchAllUsers = async (): Promise<User[]> => {
  const response = await firebase.database().ref('users').once('value') ?? [];
  const users = Object.values(response.val()) as User[];
  return users;
}

export default fetchAllUsers;
