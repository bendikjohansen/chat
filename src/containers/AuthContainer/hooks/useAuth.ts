import firebase from "firebase/app";
import "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  logout,
  selectIsLoggedIn,
  selectUser,
  User,
} from "../../../redux/slices/authSlice";

const convert = async (user: firebase.User): Promise<User> => ({
  displayName: user.displayName as string,
  uid: user.uid,
  profileUrl: user.photoURL as string,
  getToken: await user.getIdToken(),
});

const useAuth = (): boolean => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const loggedInUser = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user && !loggedInUser) {
        const convertedUser = await convert(user);
        const action = login(convertedUser);
        dispatch(action);
      } else if (!user && loggedInUser) {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch, loggedInUser]);

  return isLoggedIn;
};

export default useAuth;
