import React from "react";
import { useSelector } from "react-redux";
import { ThreadHeader } from "../../components/threads";
import { selectCurrent } from "../../redux/slices/contactSlice";

const ThreadHeaderContainer = () => {
  const contact = useSelector(selectCurrent);

  return <ThreadHeader contact={contact} />;
};

export default ThreadHeaderContainer;
