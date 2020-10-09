import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

interface Props {
  children: JSX.Element[]
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    overflow: "scroll",
    '& li:first-child': {
      marginTop: '70px',
      paddingTop: '15px'
    }
  },
});

const MessageList = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <List disablePadding className={classes.root}>
      {children}
    </List>
  );
};

export default MessageList;
