import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
    height: 100
  },
  colorPrimary: { backgroundColor: '#5d616b'},
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="static" classes={{colorPrimary: classes.colorPrimary,root: classes.root}}>
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          Made by lander
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
