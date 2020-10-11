import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  onCreateThreadClick: () => void;
}

const useStyles = makeStyles({
  root: {
    height: "70px",
    display: "flex",
    alignItems: "center",
  },
});

const ThreadListHeader = ({ onCreateThreadClick }: Props) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.root}>
      <ListItemText>
        <Typography variant="h4">Threads</Typography>
      </ListItemText>
      <ListItemSecondaryAction onClick={onCreateThreadClick}>
        <IconButton>
          <AddIcon aria-label="Create new thread" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ThreadListHeader;
