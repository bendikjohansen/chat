import app from "firebase/app";
import "firebase/auth";

const login = async () => {
  const provider = new app.auth.GoogleAuthProvider();
  await app.auth().signInWithPopup(provider);
};

export default login;
