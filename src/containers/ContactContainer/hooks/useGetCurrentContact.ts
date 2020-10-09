import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { selectContacts, selectCurrent, setCurrent } from "../../../redux/slices/contactSlice";

interface MatchParams {
  userId: string;
}

const useFetchCurrentContact = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch<MatchParams>("/t/:userId");
  const current = useSelector(selectCurrent);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    const userId = match?.params.userId;
    if (!userId || current?.id === userId) {
      return;
    }
    if (!contacts || contacts?.length === 0) {
      return;
    }

    if (userId && userId !== current?.id) {
      dispatch(setCurrent(userId));
    }
  }, [contacts, current, dispatch, match]);

  return current;
};

export default useFetchCurrentContact;
