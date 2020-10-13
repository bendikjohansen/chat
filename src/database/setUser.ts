import { User } from "../app/slices/userSlice";
import firebase from "firebase/app";
import "firebase/firestore";

const setUser = async (user: User) => {
  await firebase
    .firestore()
    .doc(`users/${user.id}`)
    .set({
      name: user.name,
      profilePicture: user.profilePicture
    });
};

export default setUser;
