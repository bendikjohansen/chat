import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const useStyles = makeStyles({
  root: {
    height: "70px",
    display: "flex",
    alignItems: "center",
  },
});

const ThreadList = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <List disablePadding>
      <ListItem className={classes.root}>
        <ListItemText>
          <Typography variant="h4">Threads</Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <TextField
          margin="dense"
          fullWidth
          label="Search by name"
          variant="outlined"
        />
      </ListItem>
      {children}
    </List>
  );
};

export default ThreadList;
