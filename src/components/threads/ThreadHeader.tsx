import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { User } from "../../redux/slices/authSlice";

interface Props {
  user: User;
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

const ThreadHeader = ({ user }: Props) => {
  const classes = useStyles();

  return (
    <List disablePadding>
      <ListItem divider className={classes.root}>
        <ListItemAvatar>
          <Avatar
            alt={user.displayName}
            src={user.profileUrl}
          />
        </ListItemAvatar>
        <ListItemText
          primary={user?.displayName}
          secondary="Active 8 minutes ago"
        />
      </ListItem>
    </List>
  );
};

export default ThreadHeader;
