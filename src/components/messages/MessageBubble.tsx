import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
  variant: "to" | "from";
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: (props: Props) =>
      props.variant === "to" ? "flex-end" : "flex-start",
  },
  bubble: {
    backgroundColor: (props: Props) => props.variant === "to" ? "#09f" : "#ddd",
    color: (props: Props) => (props.variant === "to" ? "#fff" : "#000"),
  },
});

const MessageBubble = ({ children, variant }: Props) => {
  const classes = useStyles({ children, variant });

  return (
    <ListItem dense className={classes.root}>
      <Box
        mx={1}
        py={1}
        px={2}
        maxWidth="80%"
        className={classes.bubble}
        borderRadius={8}
      >
        {children}
      </Box>
    </ListItem>
  );
};

export default MessageBubble;
