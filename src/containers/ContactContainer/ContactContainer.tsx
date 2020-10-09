import React from "react";
import { ContactSection } from "../../components/contacts";
import { useFetchContacts, useGetCurrentContact } from "./hooks";

const ContactContainer = () => {
  const contacts = useFetchContacts();
  const current = useGetCurrentContact();

  return <ContactSection contacts={contacts} current={current} />;
};

export default ContactContainer;
