import React from "react";
import AppLayout from "../../components/AppLayout";
import ContactContainer from "../ContactContainer/ContactContainer";
import ThreadContainer from "../ThreadContainer/ThreadContainer";

const AppContainer = () => {
  return (
    <AppLayout>
      <ContactContainer />
      <ThreadContainer />
    </AppLayout>
  );
};

export default AppContainer;
