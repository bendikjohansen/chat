import Typography from "@material-ui/core/Typography";
import React from "react";
import { MessageBubble, MessageList } from "../../components/threads";

const MessageListContainer = () => {
  return (
    <MessageList>
      <MessageBubble variant="from">
        <Typography>Hello</Typography>
      </MessageBubble>
      <MessageBubble variant="to">
        <Typography>Hi</Typography>
      </MessageBubble>
    </MessageList>
  );
};

export default MessageListContainer;
