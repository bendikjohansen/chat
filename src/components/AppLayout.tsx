import Box from '@material-ui/core/Box/Box';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

interface Props {
  children: [JSX.Element, JSX.Element]
};

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
  },
});


const AppLayout = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {children[0]}
      <Divider orientation="vertical" flexItem />
      {children[1]}
    </Box>
  );
}

export default AppLayout;
