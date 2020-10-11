import { current } from "@reduxjs/toolkit";
import keycode from "keycode";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNewMessage } from ".";
import { storeMessage } from "../../../database";
import createThread from "../../../database/createThread";
import { selectUser } from "../../../redux/slices/authSlice";
import { submit } from "../../../redux/slices/composerSlice";
import { selectMembers } from "../../../redux/slices/newThreadSlice";
import { selectCurrentThread } from "../../../redux/slices/threadSlice";
import { User } from "../../../redux/slices/userSlice";

const useSubmitMessageHandler = () => {
  const dispatch = useDispatch();
  const value = useNewMessage();
  const currentThread = useSelector(selectCurrentThread);
  const threadMembers = useSelector(selectMembers);
  const user = useSelector(selectUser) as User;

  return useCallback(
    (e) => {
      if (value.length > 0 && keycode.isEventKey(e, "enter")) {
        if (!currentThread) {
          createThread(threadMembers.concat([user]));
        } else {
          const threadId = currentThread.id;
          storeMessage(threadId, value);
          dispatch(submit(threadId));
        }
      }
    },
    [currentThread, dispatch, threadMembers, user, value]
  );
};

export default useSubmitMessageHandler;
