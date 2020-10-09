import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContacts,
  selectContacts,
} from "../../../redux/slices/contactSlice";

const useFetchContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    if (!contacts) {
      dispatch(fetchContacts());
    }
  }, [contacts, dispatch]);

  return contacts || [];
};

export default useFetchContacts;
