import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Contact } from "../../redux/slices/contactSlice";
import ContactHeader from "./ContactHeader";

interface Props {
  contact: Contact | null;
}

const useStyles = makeStyles({
  root: {
    height: "70px",
    display: "flex",
    alignItems: "center",
    position: "fixed",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    zIndex: 1,
  },
});

const ThreadHeader = ({ contact }: Props) => {
  const classes = useStyles();

  return (
    <List disablePadding>
      <ListItem divider className={classes.root}>
        {contact && (
          <ContactHeader contact={contact} />
        )}
      </ListItem>
    </List>
  );
};

export default ThreadHeader;
