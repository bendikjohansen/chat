import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

interface Props {
  children: JSX.Element | undefined;
}

const useStyles = makeStyles({
  root: {
    height: "70px",
    display: "flex",
    alignItems: "center",
    position: "sticky",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(4px)",
    zIndex: 1,
  },
});

const ThreadHeader = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <List disablePadding>
      <ListItem divider className={classes.root}>
        {children}
      </ListItem>
    </List>
  );
};

export default ThreadHeader;
