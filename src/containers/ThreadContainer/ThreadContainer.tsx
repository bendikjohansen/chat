import React from "react";
import { ThreadViewLayout } from "../../components/threads";
import ComposerContainer from "../ComposerContainer/ComposerContainer";
import MessageListContainer from "../MessageListContainer/MessageListContainer";
import ThreadHeaderContainer from "../ThreadHeaderContainer/ThreadHeaderContainer";

const ThreadContainer = () => (
  <ThreadViewLayout>
    <ThreadHeaderContainer />
    <MessageListContainer />
    <ComposerContainer />
  </ThreadViewLayout>
);

export default ThreadContainer;
