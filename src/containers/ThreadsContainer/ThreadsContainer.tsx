import React from "react";
import { useSelector } from "react-redux";
import { ThreadSection } from "../../components/threads";
import { selectCurrentThread } from "../../redux/slices/threadSlice";
import { useFetchThreads } from "./hooks";

const ThreadsContainer = () => {
  const threads = useFetchThreads();
  const thread = useSelector(selectCurrentThread);

  return <ThreadSection threads={threads} selected={thread} />;
};

export default ThreadsContainer;
