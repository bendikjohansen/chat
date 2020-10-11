import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import {
  selectThreads,
  selectCurrentThread,
  setCurrent,
} from "../../../redux/slices/threadSlice";

interface MatchParams {
  userId: string;
}

const useSetCurrentThread = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch<MatchParams>("/t/:userId");
  const current = useSelector(selectCurrentThread);
  const threads = useSelector(selectThreads);

  useEffect(() => {
    const userId = match?.params.userId;
    if (!userId || current?.id === userId) {
      return;
    }
    if (!threads || threads?.length === 0) {
      return;
    }

    dispatch(setCurrent(userId));
  }, [threads, current, dispatch, match]);
};

export default useSetCurrentThread;
