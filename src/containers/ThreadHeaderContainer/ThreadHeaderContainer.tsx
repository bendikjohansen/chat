import React from "react";
import { useSelector } from "react-redux";
import { ThreadHeader } from "../../components/messages";
import { selectCurrentThread } from "../../redux/slices/threadSlice";

const ThreadHeaderContainer = () => {
  const thread = useSelector(selectCurrentThread);

  return <ThreadHeader thread={thread} />;
};

export default ThreadHeaderContainer;
