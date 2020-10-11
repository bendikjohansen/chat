import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MessageList } from "../../components/messages";
import TextMessageView from "../../components/messages/TextMessageView";
import { selectUser } from "../../redux/slices/authSlice";
import { clearMessages, fetchMessages, selectThreadMessages } from "../../redux/slices/messageSlice";
import { selectCurrentThread } from "../../redux/slices/threadSlice";
import { selectUsers, User } from "../../redux/slices/userSlice";


const MessageListContainer = () => {
  const thread = useSelector(selectCurrentThread);
  const messages = useSelector(selectThreadMessages);
  const users = useSelector(selectUsers);
  const user = useSelector(selectUser) as User;
  const dispatch = useDispatch();
  useEffect(() => {
    if (thread) {
      dispatch(fetchMessages(thread.id));
    }
  }, [dispatch, thread]);
  useEffect(() => {
    if(!thread && messages.length > 0) {
      dispatch(clearMessages());
    }
  }, [dispatch, messages, thread]);

  return (
    <MessageList>
      {messages.map(message => (
        <TextMessageView key={message.id} users={users} user={user} message={message} />
      ))}
    </MessageList>
  );
};

export default MessageListContainer;
