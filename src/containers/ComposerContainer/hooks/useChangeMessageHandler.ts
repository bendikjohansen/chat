import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewMessage } from "../../../redux/slices/newMessageSlice";
import { selectCurrent } from "../../../redux/slices/threadSlice";

const useChangeMessageHandler = () => {
  const dispatch = useDispatch();
  const currentThread = useSelector(selectCurrent);

  return useCallback(
    (e) =>
      dispatch(
        setNewMessage({
          userId: currentThread?.id ?? "",
          content: e.target.value,
        })
      ),
    [currentThread, dispatch]
  );
};

export default useChangeMessageHandler;
