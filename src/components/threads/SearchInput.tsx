import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import React from "react";

const SearchInput = () => (
  <ListItem>
    <TextField
      margin="dense"
      fullWidth
      label="Search by name"
      variant="outlined"
    />
  </ListItem>
);

export default SearchInput;
