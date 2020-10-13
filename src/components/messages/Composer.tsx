import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import React, { ChangeEvent, KeyboardEvent } from "react";

interface Props {
  value: string,
  onChange: (e: ChangeEvent) => void,
  onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void,
}

const Composer = ({ value, onChange, onKeyDown }: Props) => (
  <Box padding={1}>
    <TextField variant="outlined" margin="dense" value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder="Type a message" fullWidth />
  </Box>
);

export default Composer;
