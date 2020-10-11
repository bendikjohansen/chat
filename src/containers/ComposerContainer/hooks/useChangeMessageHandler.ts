import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../../redux/slices/composerSlice";
import { selectCurrentThread } from "../../../redux/slices/threadSlice";

const useChangeMessageHandler = () => {
  const dispatch = useDispatch();
  const currentThread = useSelector(selectCurrentThread);

  return useCallback(
    (e) => {
      if (!currentThread) {
        return;
      }

      const action = change({
        threadId: currentThread.id,
        content: e.target.value,
      });
      dispatch(action);
    },
    [currentThread, dispatch]
  );
};

export default useChangeMessageHandler;
