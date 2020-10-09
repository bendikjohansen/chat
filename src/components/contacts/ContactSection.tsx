import Box from "@material-ui/core/Box";
import React, { useMemo } from "react";
import { ContactList, ContactListItem } from "../../components/contacts";
import { Contact } from "../../redux/slices/contactSlice";

interface Props {
  contacts: Contact[];
  current: Contact | null;
}

const ContactSection = ({ contacts, current }: Props) => {
  const currentId = useMemo(() => current?.id || '', [current]);

  return (
    <Box minWidth="300px">
      <ContactList>
        {contacts.map((contact) => (
          <ContactListItem key={contact.id} contact={contact} currentId={currentId} />
        ))}
      </ContactList>
    </Box>
  );
};

export default ContactSection;
