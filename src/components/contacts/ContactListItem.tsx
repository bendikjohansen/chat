import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React from "react";
import { User } from "../../redux/slices/authSlice";

interface Props {
  user: User;
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

const ContactListItem = ({ user }: Props) => {
  const classes = useStyles();

  return (
    <ListItem button ContainerProps={{ className: classes.root }}>
      <ListItemAvatar>
        <Avatar
          alt={user.displayName as string}
          src={user.profileUrl as string}
        />
      </ListItemAvatar>
      <ListItemText>{user.displayName}</ListItemText>
      <ListItemSecondaryAction className="listitem-menu">
        <IconButton>
          <MoreHorizIcon fontSize="small" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ContactListItem;
