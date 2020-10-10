import React from "react";
import AppLayout from "../../components/AppLayout";
import ThreadsContainer from "../ThreadsContainer/ThreadsContainer";
import MessageContainer from "../MessagesContainer/MessagesContainer";
import { useSetCurrentThread } from "./hooks";

const AppContainer = () => {
  useSetCurrentThread();

  return (
    <AppLayout>
      <ThreadsContainer />
      <MessageContainer />
    </AppLayout>
  );
};

export default AppContainer;
