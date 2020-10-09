import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import React from 'react';

const ComposerContainer = () => {
  return (
    <Box padding={1}>
      <TextField placeholder="Type a message" fullWidth />
    </Box>
  );
};

export default ComposerContainer;
