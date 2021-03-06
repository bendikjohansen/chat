import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import {
  selectThreads,
  selectCurrentThread,
  setCurrentThread,
  resetCurrentThread,
} from "../../../app/slices/threadSlice";

interface MatchParams {
  threadId: string;
}

const useSetCurrentThread = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch<MatchParams>("/t/:threadId");
  const current = useSelector(selectCurrentThread);
  const threads = useSelector(selectThreads);

  useEffect(() => {
    const threadId = match?.params.threadId;
    if (!threadId && current) {
      dispatch(resetCurrentThread());
      return;
    }
    if (!threadId || current?.id === threadId) {
      return;
    }
    if (!threads || threads?.length === 0) {
      return;
    }

    dispatch(setCurrentThread(threadId));
  }, [threads, current, dispatch, match]);
};

export default useSetCurrentThread;
