import React from "react";
import { MessageViewLayout } from "../../components/messages";
import ComposerContainer from "../ComposerContainer/ComposerContainer";
import MessageListContainer from "../MessageListContainer/MessageListContainer";
import ThreadHeaderContainer from "../ThreadHeaderContainer/ThreadHeaderContainer";

const MessagesContainer = () => (
  <MessageViewLayout>
    <ThreadHeaderContainer />
    <MessageListContainer />
    <ComposerContainer />
  </MessageViewLayout>
);

export default MessagesContainer;
