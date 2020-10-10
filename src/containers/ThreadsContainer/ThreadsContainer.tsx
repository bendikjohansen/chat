import React from "react";
import { useSelector } from "react-redux";
import { ThreadSection } from "../../components/threads";
import { selectCurrent } from "../../redux/slices/threadSlice";
import { useFetchThreads } from "./hooks";

const ThreadsContainer = () => {
  const threads = useFetchThreads();
  const current = useSelector(selectCurrent);

  return <ThreadSection threads={threads} current={current} />;
};

export default ThreadsContainer;
