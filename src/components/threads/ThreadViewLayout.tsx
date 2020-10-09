import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

interface Props {
  children: [JSX.Element, JSX.Element, JSX.Element]
}

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
});

const ThreadContainer = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {children[0]}
      {children[1]}
      {children[2]}
    </Box>
  );
};

export default ThreadContainer;
