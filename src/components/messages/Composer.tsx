import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import React, { ChangeEvent } from "react";

interface Props {
  onChange: (e: ChangeEvent) => void,
}

const Composer = ({ onChange }: Props) => (
  <Box padding={1}>
    <TextField onChange={onChange} placeholder="Type a message" fullWidth />
  </Box>
);

export default Composer;
