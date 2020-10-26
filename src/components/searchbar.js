import React, {Fragment,useState} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
    
    fetch(`http://localhost:8080/${rsn}`)
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
      <Grid container>
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
          {pressed ? <CircularProgress color='inherit' size={50}/> : <Fragment />}
        </Grid>
      </Grid>
      <Grid container style={{paddingTop:'15px'}}>
        <Button variant="contained" color="default" type="submit">Lookup</Button>
      </Grid>
    </form>
  );
}