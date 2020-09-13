import React, { useState, Fragment } from 'react';
import './App.css';
import './components/highscore'
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/navbar';
import Highscore from './components/highscore';
import Searchbar from './components/searchbar';
import Skillinfo from './components/skillinfo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { player } from './assets/variables';

const useStyles = makeStyles(() => ({
  paper: {
    padding: 10,
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

function App() {

  const [playerData, setPlayerdata] = useState(player);
  const classes = useStyles();

  return (
    <Fragment className="App">
        <Navbar/>
        <Searchbar
          className={classes.searchbar}
          setPlayerdata={setPlayerdata} 
          playerData={playerData}
        />
        <Paper className={classes.paper} square>
        <Router>
          <Switch>
            <Route exact path="/">
              <Highscore playerData={playerData} />
            </Route>
            <Route exact path="/skillinfo" component={Skillinfo} />
          </Switch>
        </Router>
      </Paper>
    </Fragment>
  );
}

export default App;
