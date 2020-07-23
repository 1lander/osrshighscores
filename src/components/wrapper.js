import React, { useState }  from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Highscore from './highscore';
import Searchbar from './searchbar';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 20,
    marginLeft: 150,
    marginRight: 150,
    backgroundColor: "#dedcdc"
  },
  searchbar: {
    marginRight: "50%",
    marginLeft: 50

  },
}));

export default function Wrapper() {
  const [playerData, setPlayerdata] = useState();
  const [pressed, setPressed] = useState(false);
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Searchbar
          className={classes.searchbar}
          setPlayerdata={setPlayerdata} 
          playerData={playerData}
          setPressed={setPressed}
        />
      </Grid>
      <Grid container>
        {pressed ? <CircularProgress /> : <React.Fragment />}
        {playerData && <Highscore playerData={playerData} />}
      </Grid>
    </Paper>
  );
}
