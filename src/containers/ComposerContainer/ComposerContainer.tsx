import React from "react";
import { Composer } from "../../components/messages";
import { useNewMessage, useSubmitMessageHandler } from "./hooks";
import useChangeMessageHandler from "./hooks/useChangeMessageHandler";

const ComposerContainer = () => {
  const value = useNewMessage();
  const handleChange = useChangeMessageHandler();
  const handleSubmit = useSubmitMessageHandler();

  return <Composer value={value} onChange={handleChange} onKeyDown={handleSubmit} />;
};

export default ComposerContainer;
