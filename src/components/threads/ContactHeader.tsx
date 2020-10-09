import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { Contact } from "../../redux/slices/contactSlice";

interface Props {
  contact: Contact;
}

const ContactHeader = ({ contact }: Props) => (
  <>
    <ListItemAvatar>
      <Avatar alt={contact?.name} src={contact?.profilePicture} />
    </ListItemAvatar>
    <ListItemText primary={contact?.name} secondary="Active 8 minutes ago" />
  </>
);

export default ContactHeader;
