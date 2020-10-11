import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ThreadHeader } from "../../components/messages";
import NewThreadHeader from "../../components/messages/NewThreadHeader";
import ThreadHeaderItem from "../../components/messages/ThreadHeaderItem";
import { selectUser } from "../../redux/slices/authSlice";
import { selectMembers, setMembers } from "../../redux/slices/newThreadSlice";
import { selectCurrentThread } from "../../redux/slices/threadSlice";
import { selectUsers } from "../../redux/slices/userSlice";

const ThreadHeaderContainer = () => {
  const thread = useSelector(selectCurrentThread);
  const location = useLocation<string>();
  const isNew = useMemo(() => location.pathname === "/new", [location]);
  const users = useSelector(selectUsers)
  const dispatch = useDispatch();
  const handleChange = useCallback((e, val) => dispatch(setMembers(val)), [dispatch]);
  const selectedUsers = useSelector(selectMembers);
  const user = useSelector(selectUser);
  const options = useMemo(() => users.filter(u => u.id !== user?.id), [user, users]);

  return (
    <ThreadHeader>
      { isNew ? (
        <NewThreadHeader options={options} onChange={handleChange} value={selectedUsers} />
      ) : (
        thread && <ThreadHeaderItem thread={thread} />
      )}
    </ThreadHeader>
  );
};

export default ThreadHeaderContainer;
