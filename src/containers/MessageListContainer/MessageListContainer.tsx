import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../app/slices/authSlice";
import {
  clearMessages,
  selectThreadMessages,
  setMessages,
} from "../../app/slices/messageSlice";
import { selectCurrentThread } from "../../app/slices/threadSlice";
import { selectUsers, User } from "../../app/slices/userSlice";
import { MessageList, TextMessageView } from "../../components/messages";
import { listenToMessages } from "../../database";

const MessageListContainer = () => {
  const thread = useSelector(selectCurrentThread);
  const messages = useSelector(selectThreadMessages);
  const users = useSelector(selectUsers);
  const user = useSelector(selectUser) as User;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!thread) {
      return;
    }

    const unsubscribe = listenToMessages(thread.id, (messages) => {
      dispatch(setMessages(messages));
    });

    return () => unsubscribe();
  }, [dispatch, thread]);

  useEffect(() => {
    if (!thread && messages.length > 0) {
      dispatch(clearMessages());
    }
  }, [dispatch, messages, thread]);

  return (
    <MessageList>
      {messages.map((message) => (
        <TextMessageView
          key={message.id}
          users={users}
          user={user}
          message={message}
        />
      ))}
    </MessageList>
  );
};

export default MessageListContainer;
