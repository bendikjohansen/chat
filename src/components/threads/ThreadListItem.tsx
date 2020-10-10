import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React, { useMemo } from "react";
import { Thread } from "../../redux/slices/threadSlice";
import ThreadLink from "./ThreadLink";

interface Props {
  thread: Thread;
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

const ThreadListItem = ({ thread, currentId }: Props) => {
  const classes = useStyles();
  const threadUrl = useMemo(() => `/t/${thread.id}`, [thread.id]);
  const isSelected = useMemo(() => thread.id === currentId, [thread, currentId]);

  return (
    <ListItem
      button
      ContainerProps={{ className: classes.root }}
      component={ThreadLink}
      to={threadUrl}
      selected={isSelected}
    >
      <ListItemAvatar>
        <Avatar alt={thread.name} src={thread.profilePicture} />
      </ListItemAvatar>
      <ListItemText>{thread.name}</ListItemText>
      <ListItemSecondaryAction className="listitem-menu">
        <IconButton>
          <MoreHorizIcon fontSize="small" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ThreadListItem;
