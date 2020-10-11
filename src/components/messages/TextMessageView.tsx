import Typography from "@material-ui/core/Typography";
import React from "react";
import { useMemo } from "react";
import { Message } from "../../redux/slices/messageSlice";
import { User } from "../../redux/slices/userSlice";
import MessageBubble from "./MessageBubble";

interface MessageView extends Message {
  profilePicture: string;
  direction: "to" | "from";
  name: string;
}

interface Props {
  users: User[];
  user: User;
  message: Message;
}

const TextMessageView = ({ users, user, message }: Props) => {

  const view: MessageView = useMemo(() => {
    const author = users.find(u => u.id === message.userId) as User;
    const direction = message.userId === user.id ? 'to' : 'from';

    return {
      ...message,
      profilePicture: author.profilePicture,
      name: author.name,
      direction
    };
  }, [message, user, users]);

  return (
    <MessageBubble variant={view.direction}>
      <Typography>{view.content}</Typography>
    </MessageBubble>
  );
};

export default TextMessageView;
