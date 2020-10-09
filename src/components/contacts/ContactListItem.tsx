import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React, { useMemo } from "react";
import { Contact } from "../../redux/slices/contactSlice";
import ContactLink from "./ContactLink";

interface Props {
  contact: Contact;
  currentId: string;
}

const useStyles = makeStyles({
  root: {
    "& .listitem-menu": {
      display: "none",
    },

    "&:hover, &:focus-within": {
      "& .listitem-menu": {
        display: "block",
      },
    },
  },
});

const ContactListItem = ({ contact, currentId }: Props) => {
  const classes = useStyles();
  const contactUrl = useMemo(() => `/t/${contact.id}`, [contact.id]);
  const isSelected = useMemo(() => contact.id === currentId, [contact, currentId]);

  return (
    <ListItem
      button
      ContainerProps={{ className: classes.root }}
      component={ContactLink}
      to={contactUrl}
      selected={isSelected}
    >
      <ListItemAvatar>
        <Avatar alt={contact.name} src={contact.profilePicture} />
      </ListItemAvatar>
      <ListItemText>{contact.name}</ListItemText>
      <ListItemSecondaryAction className="listitem-menu">
        <IconButton>
          <MoreHorizIcon fontSize="small" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ContactListItem;
