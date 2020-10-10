import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Thread } from "../../redux/slices/threadSlice";
import ThreadHeaderItem from "./ThreadHeaderItem";

interface Props {
  thread: Thread | null;
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

const ThreadHeader = ({ thread }: Props) => {
  const classes = useStyles();

  return (
    <List disablePadding>
      <ListItem divider className={classes.root}>
        {thread && (
          <ThreadHeaderItem thread={thread} />
        )}
      </ListItem>
    </List>
  );
};

export default ThreadHeader;
