
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ThreadSection } from "../../components/threads";
import { selectCurrentThread } from "../../app/slices/threadSlice";
import { useFetchThreads } from "./hooks";

const ThreadsContainer = () => {
  const threads = useFetchThreads();
  const thread = useSelector(selectCurrentThread);
  const history = useHistory();
  const handleCreateThreadClick = useCallback(() => {
    history.push('/new');
  }, [history]);

  return <ThreadSection threads={threads} selected={thread} onCreateThreadClick={handleCreateThreadClick} />;
};

export default ThreadsContainer;
