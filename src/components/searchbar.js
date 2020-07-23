import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export default class RsnForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {rsn: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlechange = this.handlechange.bind(this);
  }

  handleSubmit(e){
      e.preventDefault();
      this.props.setPressed(true)
      fetch(`http://localhost:8080/stats/${this.state.rsn}`)
        .then(response => response.json())
        .then(data => {
            this.props.setPlayerdata(data.main)
            this.props.setPressed(false)
        });
  }

  handlechange(e){
    this.setState({rsn: e.target.value})
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container>
          <TextField 
            id="rsnInput" 
            label="rsn" 
            variant="outlined"
            value={this.state.rsn}
            onChange={this.handlechange}
          />
        </Grid>
        <Grid container style={{marginTop: 10, marginBottom: 30}}>
          <Button variant="contained" color="primary" type="submit">Lookup</Button>
        </Grid>
      </form>
    );
  }
}