import React, {Fragment,useState} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { player } from '../assets/variables';

export default function Searchbar(props){
  const [rsn, setRsn] = useState("");
  const [pressed, setPressed] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setPressed(true);
    props.setPlayerdata(player);
    
    fetch(`http://localhost:8080/${props.type}/${rsn}`)
      .then(response => {
        setPressed(false);
        if (response.ok){
          return response.json();
        } else {
          return Promise.reject('This player does not exist or is not on the highscores')
        }
      }).then(data => {
          props.setPlayerdata(data);
      }).catch(error => console.log('error is', error));
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid 
        container
        justify="space-between"
      >
        <Grid item>
          <TextField 
            id="rsnInput" 
            label="rsn" 
            variant="outlined"
            value={rsn}
            onChange={e => setRsn(e.target.value)}
          />
        </Grid>
        <Grid item>
          {pressed ? <CircularProgress color='inherit' size={50}/> : <Fragment/>}
        </Grid>
        <Grid item>
          <Select
            id="typeInput"
            label="type"
            value={props.type}
            onChange={e => props.setType(e.target.value)}
          >
            <MenuItem value={"hiscore_oldschool"}>Highscores</MenuItem>
            <MenuItem value={"hiscore_oldschool_seasonal"}>Leagues</MenuItem>
          </Select>
        </Grid>
      </Grid>
      <Grid container style={{paddingTop:'15px'}}>
        <Button variant="contained" color="default" type="submit">Lookup</Button>
      </Grid>
    </form>
  );
}