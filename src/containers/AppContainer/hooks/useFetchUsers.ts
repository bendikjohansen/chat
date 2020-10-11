import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectUsers } from "../../../redux/slices/userSlice";

const useFetchUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    if (!users.length) {
      dispatch(fetchUsers());
    }
  }, [users, dispatch]);
}

export default useFetchUsers;
