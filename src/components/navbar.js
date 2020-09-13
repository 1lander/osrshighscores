import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  colorPrimary: { backgroundColor: '#5d616b'},
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static" classes={{colorPrimary: classes.colorPrimary}}>
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          Max calculator
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
