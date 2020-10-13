import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectMessage } from "../../../app/slices/composerSlice";
import { selectCurrentThread } from "../../../app/slices/threadSlice";

const useNewMessage = () => {
  const currentThread = useSelector(selectCurrentThread);
  const newMessageSelector = useMemo(() => selectMessage(currentThread?.id ?? 'new'), [currentThread]);
  const newMessage = useSelector(newMessageSelector);
  const value = useMemo(() => newMessage ?? '', [newMessage]);

  return value;
}

export default useNewMessage;
