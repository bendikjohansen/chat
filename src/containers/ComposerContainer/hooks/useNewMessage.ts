import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectNewMessage } from "../../../redux/slices/newMessageSlice";
import { selectCurrent } from "../../../redux/slices/threadSlice";

const useNewMessage = () => {
  const currentThread = useSelector(selectCurrent);
  const newMessageSelector = useMemo(() => selectNewMessage(currentThread?.id ?? ''), [currentThread]);
  const newMessage = useSelector(newMessageSelector);
  const value = useMemo(() => newMessage ?? '', [newMessage]);

  return value
  ;
}

export default useNewMessage;
