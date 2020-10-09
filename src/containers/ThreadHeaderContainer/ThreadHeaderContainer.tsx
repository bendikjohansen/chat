import React from "react";
import { useSelector } from "react-redux";
import { ThreadHeader } from "../../components/threads";
import { selectUser, User } from "../../redux/slices/authSlice";

const ThreadHeaderContainer = () => {
  const user = useSelector(selectUser) as User;

  return <ThreadHeader user={user} />;
};

export default ThreadHeaderContainer;
