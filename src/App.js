import React, { useState } from 'react';
import './App.css';
import './components/highscore'
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
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
  const [pressed, setPressed] = useState(false);
  const classes = useStyles();

  return (
    <div className="App">
      <Navbar/>
      <Paper className={classes.paper} square>
        <Searchbar
          className={classes.searchbar}
          setPlayerdata={setPlayerdata} 
          playerData={playerData}
          setPressed={setPressed}
        />

        {pressed ? <CircularProgress /> : <React.Fragment />}
        
        <Router>
          <Switch>
            <Route exact path="/">
              <Highscore playerData={playerData} />
            </Route>
            <Route exact path="/skillinfo" component={Skillinfo} />
          </Switch>
        </Router>
      </Paper>
    </div>
  );
}

export default App;
