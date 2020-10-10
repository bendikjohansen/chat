import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchThreads,
  selectThreads,
} from "../../../redux/slices/threadSlice";

const useFetchThreads = () => {
  const dispatch = useDispatch();
  const threads = useSelector(selectThreads);

  useEffect(() => {
    if (!threads) {
      dispatch(fetchThreads());
    }
  }, [threads, dispatch]);

  return threads || [];
};

export default useFetchThreads;
