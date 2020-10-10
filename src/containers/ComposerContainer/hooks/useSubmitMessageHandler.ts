import keycode from "keycode";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNewMessage } from ".";
import { storeMessage } from "../../../database";
import { submit } from "../../../redux/slices/newMessageSlice";
import { selectCurrent } from "../../../redux/slices/threadSlice";

const useSubmitMessageHandler = () => {
  const dispatch = useDispatch();
  const value = useNewMessage();
  const currentThread = useSelector(selectCurrent);

  return useCallback(
    (e) => {
      if (!currentThread) {
        return;
      }

      const threadId = currentThread.id
      if (value.length > 0 && keycode.isEventKey(e, "enter")) {
        storeMessage(threadId, value);
        dispatch(submit(threadId));
      }
    },
    [currentThread, dispatch, value]
  );
};

export default useSubmitMessageHandler;
