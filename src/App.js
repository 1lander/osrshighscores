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

function App() {

  let emptyPlayer = [
      {id: 1, name: "overall", level:1, xp:0, rank:null, color: "#32a852"},
      {id: 2, name: "attack", level:1, xp:0, rank:null, color: "#f21202"},
      {id: 3, name: "defence", level:1, xp:0, rank:null, color: "#74e4f2"},
      {id: 4, name: "strength", level:1, xp:0, rank:null, color: "#338239"},
      {id: 5, name: "hitpoints", level:10, xp:1154, rank:null, color: "#ccbebe"},
      {id: 6, name: "ranged", level:1, xp:0, rank:null, color: "#20692c"},
      {id: 7, name: "prayer", level:1, xp:0, rank:null, color: "#32a852"},
      {id: 8, name: "magic", level:1, xp:0, rank:null, color: "#32a852"},
      {id: 9, name: "cooking", level:1, xp:0, rank:null, color: "#32a852"},
      {id: 10, name: "woodcutting", level:1, xp:0, rank:null, color: "#32a852"},
      {id: 11, name: "fletching", level:1, xp:0, rank:null, color: "#32a852"},
      {id: 12, name: "fishing", level:1, xp:0, rank:null, color: "#32a852"},
      {id: 13, name: "firemaking", level:1, xp:0, rank:null, color: "#32a852"},
      {id: 14, name: "crafting", level:1, xp:0, rank:null, color: "#32a852"},
      {id: 15, name: "smithing", level:1, xp:0, rank:null, color: "#32a852"},
      {id: 16, name: "mining", level:1, xp:0, rank:null, color: "#32a852"},
      {id: 17, name: "herblore", level:1, xp:0, rank:null, color: "#32a852"},
      {id: 18, name: "agility", level:1, xp:0, rank:null, color: "#32a852"},
      {id: 19, name: "thieving", level:1, xp:0, rank:null, color: "#32a852"},
      {id: 20, name: "slayer", level:1, xp:0, rank:null, color: "#32a852"},
      {id: 21, name: "farming", level:1, xp:0, rank:null, color: "#32a852"},
      {id: 22, name: "runecraft", level:1, xp:0, rank:null, color: "#32a852"},
      {id: 23, name: "hunter", level:1, xp:0, rank:null, color: "#32a852"},
      {id: 24, name: "construction", level:1, xp:0, rank:null, color: "#32a852"}
  ];

  const [playerData, setPlayerdata] = useState(emptyPlayer);
  const [pressed, setPressed] = useState(false);
  const classes = useStyles();

  return (
    <div className="App">
      <Navbar/>
      <Paper className={classes.paper}>
        <Searchbar
          className={classes.searchbar}
          setPlayerdata={setPlayerdata} 
          playerData={playerData}
          setPressed={setPressed}
        />

        {pressed ? <CircularProgress /> : <React.Fragment />}
        {playerData && 
        <Router>
          <Switch>
            <Route exact path="/">
              <Highscore playerData={playerData} />
            </Route>
            <Route exact path="/skillinfo" component={Skillinfo}>
            </Route>
          </Switch>
        </Router>}
      </Paper>
    </div>
  );
}

export default App;
