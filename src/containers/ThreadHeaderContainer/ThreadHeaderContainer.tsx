import React from "react";
import { useSelector } from "react-redux";
import { ThreadHeader } from "../../components/messages";
import { selectCurrent } from "../../redux/slices/threadSlice";

const ThreadHeaderContainer = () => {
  const thread = useSelector(selectCurrent);

  return <ThreadHeader thread={thread} />;
};

export default ThreadHeaderContainer;
