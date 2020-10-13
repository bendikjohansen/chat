import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listenToThreads } from "../../../database";
import { selectUser } from "../../../app/slices/authSlice";
import { selectThreads, setThreads } from "../../../app/slices/threadSlice";
import { selectUsers, User } from "../../../app/slices/userSlice";

const useFetchThreads = () => {
  const dispatch = useDispatch();
  const threads = useSelector(selectThreads);
  const loggedOnUser = useSelector(selectUser) as User;
  const users = useSelector(selectUsers);

  useEffect(() => {
    if (!users.length) {
      return;
    }

    const unsubscribe = listenToThreads(loggedOnUser.id, (databaseThreads) => {
      dispatch(setThreads({threads: databaseThreads, loggedOnUser, members: users}));
    });

    return () => unsubscribe();
  }, [dispatch, users, loggedOnUser]);

  return threads || [];
};

export default useFetchThreads;
