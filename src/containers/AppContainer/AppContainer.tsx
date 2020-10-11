import React from "react";
import AppLayout from "../../components/AppLayout";
import ThreadsContainer from "../ThreadsContainer/ThreadsContainer";
import MessageContainer from "../MessagesContainer/MessagesContainer";
import { useFetchUsers, useSetCurrentThread } from "./hooks";

const AppContainer = () => {
  useSetCurrentThread();
  useFetchUsers();

  return (
    <AppLayout>
      <ThreadsContainer />
      <MessageContainer />
    </AppLayout>
  );
};

export default AppContainer;
