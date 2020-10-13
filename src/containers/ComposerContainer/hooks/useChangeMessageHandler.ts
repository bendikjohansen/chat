import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../../app/slices/composerSlice";
import { selectCurrentThread } from "../../../app/slices/threadSlice";

const useChangeMessageHandler = () => {
  const dispatch = useDispatch();
  const currentThread = useSelector(selectCurrentThread);

  return useCallback(
    (e) => {
      const threadId = currentThread?.id ?? 'new';

      const action = change({
        threadId: threadId,
        content: e.target.value,
      });
      dispatch(action);
    },
    [currentThread, dispatch]
  );
};

export default useChangeMessageHandler;
