import firebase from "firebase/app";
import "firebase/database";
import { User } from "../redux/slices/userSlice";

const setUser = async (user: User) => {
  await firebase.database().ref(`users/${user.id}`).set({
    id: user.id,
    name: user.name,
    profilePicture: user.profilePicture
  });
};

export default setUser;
