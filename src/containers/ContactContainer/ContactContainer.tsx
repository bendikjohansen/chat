import Box from "@material-ui/core/Box";
import React from "react";
import { useSelector } from "react-redux";
import { ContactList, ContactListItem } from "../../components/contacts";
import { selectUser, User } from "../../redux/slices/authSlice";

const ContactContainer = () => {
  const user = useSelector(selectUser) as User;

  return (
    <Box minWidth="300px">
      <ContactList>
        <ContactListItem user={user} />
        <ContactListItem user={user} />
        <ContactListItem user={user} />
      </ContactList>
    </Box>
  );
};

export default ContactContainer;
