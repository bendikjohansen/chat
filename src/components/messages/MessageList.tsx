import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useRef } from "react";

interface Props {
  children: JSX.Element[];
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    overflow: "scroll",
    marginTop: "-75px",
    paddingTop: "80px",
  },
});

const MessageList = ({ children }: Props) => {
  const listRef = useRef<HTMLUListElement>(null);
  const classes = useStyles();

  useEffect(() => {
    if (!listRef.current) {
      return;
    }

    const lastMessage = listRef.current.lastElementChild;
    if (lastMessage) {
      lastMessage.scrollIntoView({
        block: 'nearest'
      });
    }
  }, [children.length]);

  return (
    <List disablePadding className={classes.root} ref={listRef}>
      {children}
    </List>
  );
};

export default MessageList;
