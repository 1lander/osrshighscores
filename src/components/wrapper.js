import React, { useState }  from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Highscore from './highscore';
import Searchbar from './searchbar';
import Skillinfo from './skillinfo';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
      <Searchbar
        className={classes.searchbar}
        setPlayerdata={setPlayerdata} 
        playerData={playerData}
        setPressed={setPressed}
      />
      {pressed ? <CircularProgress /> : <React.Fragment />}
      {playerData && <Highscore playerData={playerData} />}
      <Router>
        <Switch>
            <Route path="/highscores">
              <Highscore />
            </Route>
            <Route path="/skillinfo">
              <Skillinfo />
            </Route>
          </Switch>
      </Router>
    </Paper>
  );
}
