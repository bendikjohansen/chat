import { User } from "../redux/slices/authSlice";
import firebase from "firebase/app";
import "firebase/database";

const setUser = async (user: User) => {
  await firebase.database().ref(`users/${user.id}`).set({
    id: user.id,
    name: user.name,
    profilePicture: user.profilePicture
  });
};

export default setUser;
