import firebase from 'firebase/app';
import "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from '../../../database';
import {
  login,
  logout,
  selectUser,
} from "../../../redux/slices/authSlice";
import { User } from '../../../redux/slices/userSlice';

const convert = async (user: firebase.User): Promise<User> => ({
  name: user.displayName as string,
  id: user.uid,
  profilePicture: user.photoURL as string,
});

const useAuth = (): User | null => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user && !loggedInUser) {
        const convertedUser = await convert(user);
        setUser(convertedUser);
        const action = login(convertedUser);
        dispatch(action);
      } else if (!user && loggedInUser) {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch, loggedInUser]);

  return loggedInUser;
};

export default useAuth;
