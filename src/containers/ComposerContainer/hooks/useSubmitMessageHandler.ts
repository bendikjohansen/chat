import keycode from "keycode";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNewMessage } from ".";
import { storeMessage } from "../../../database";
import createThread from "../../../database/createThread";
import { selectUser } from "../../../app/slices/authSlice";
import { submit } from "../../../app/slices/composerSlice";
import { selectMembers } from "../../../app/slices/newThreadSlice";
import { selectCurrentThread } from "../../../app/slices/threadSlice";
import { User } from "../../../app/slices/userSlice";

const useSubmitMessageHandler = () => {
  const dispatch = useDispatch();
  const value = useNewMessage();
  const currentThread = useSelector(selectCurrentThread);
  const threadMembers = useSelector(selectMembers);
  const user = useSelector(selectUser) as User;

  const getThreadId = useCallback((): Promise<string> => {
    if (currentThread) {
      return Promise.resolve(currentThread.id);
    }
    const members = threadMembers.concat([user]);
    return createThread(members);
  }, [currentThread, threadMembers, user]);

  return useCallback(
    async (e) => {
      if (value.length > 0 && keycode.isEventKey(e, "enter")) {
        const threadId = await getThreadId();
        storeMessage(threadId, value, user);
        dispatch(submit(threadId));
      }
    },
    [dispatch, getThreadId, user, value]
  );
};

export default useSubmitMessageHandler;
