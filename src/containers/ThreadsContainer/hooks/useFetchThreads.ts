import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/slices/authSlice";
import {
  fetchThreads,
  selectThreads,
} from "../../../redux/slices/threadSlice";
import { selectUsers, User } from "../../../redux/slices/userSlice";

const useFetchThreads = () => {
  const dispatch = useDispatch();
  const threads = useSelector(selectThreads);
  const user = useSelector(selectUser) as User;
  const users = useSelector(selectUsers);

  useEffect(() => {
    if (!users.length) {
      return;
    }

    if (!threads) {
      dispatch(fetchThreads(user, users));
    }
  }, [threads, dispatch, user, users]);

  return threads || [];
};

export default useFetchThreads;
