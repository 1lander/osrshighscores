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
        .then(response => {
          if (response.ok){
            return response.json();
          } else {
            this.props.setPressed(false)
            return Promise.reject('This rsn does not exist or is not on the highscores')
          }
        }).then(data => {
            let s = data.main.skills;
            //console.log(data.main);
            this.props.setPlayerdata([
                {id: 1, name: "overall", level:s.overall.level, xp:s.overall.xp, rank:s.overall.rank, color: "#32a852"},
                {id: 2, name: "attack", level:s.attack.level, xp:s.attack.xp, rank:s.attack.rank, color: "#f21202"},
                {id: 3, name: "defence", level:s.defence.level, xp:s.defence.xp, rank:s.defence.rank, color: "#74e4f2"},
                {id: 4, name: "strength", level:s.strength.level, xp:s.strength.xp, rank:s.strength.rank, color: "#32a852"},
                {id: 5, name: "hitpoints", level:s.hitpoints.level, xp:s.hitpoints.xp, rank:s.hitpoints.rank, color: "#32a852"},
                {id: 6, name: "ranged", level:s.ranged.level, xp:s.ranged.xp, rank:s.ranged.rank, color: "#32a852"},
                {id: 7, name: "prayer", level:s.prayer.level, xp:s.prayer.xp, rank:s.prayer.rank, color: "#32a852"},
                {id: 8, name: "magic", level:s.magic.level, xp:s.magic.xp, rank:s.magic.rank, color: "#32a852"},
                {id: 9, name: "cooking", level:s.cooking.level, xp:s.cooking.xp, rank:s.cooking.rank, color: "#32a852"},
                {id: 10, name: "woodcutting", level:s.woodcutting.level, xp:s.woodcutting.xp, rank:s.woodcutting.rank, color: "#32a852"},
                {id: 11, name: "fletching", level:s.fletching.level, xp:s.fletching.xp, rank:s.fletching.rank, color: "#32a852"},
                {id: 12, name: "fishing", level:s.fishing.level, xp:s.fishing.xp, rank:s.fishing.rank, color: "#32a852"},
                {id: 13, name: "firemaking", level:s.firemaking.level, xp:s.firemaking.xp, rank:s.firemaking.rank, color: "#32a852"},
                {id: 14, name: "crafting", level:s.crafting.level, xp:s.crafting.xp, rank:s.crafting.rank, color: "#32a852"},
                {id: 15, name: "smithing", level:s.smithing.level, xp:s.smithing.xp, rank:s.smithing.rank, color: "#32a852"},
                {id: 16, name: "mining", level:s.mining.level, xp:s.mining.xp, rank:s.mining.rank, color: "#32a852"},
                {id: 17, name: "herblore", level:s.herblore.level, xp:s.herblore.xp, rank:s.herblore.rank, color: "#32a852"},
                {id: 18, name: "agility", level:s.agility.level, xp:s.agility.xp, rank:s.agility.rank, color: "#32a852"},
                {id: 19, name: "thieving", level:s.thieving.level, xp:s.thieving.xp, rank:s.thieving.rank, color: "#32a852"},
                {id: 20, name: "slayer", level:s.slayer.level, xp:s.slayer.xp, rank:s.slayer.rank, color: "#32a852"},
                {id: 21, name: "farming", level:s.farming.level, xp:s.farming.xp, rank:s.farming.rank, color: "#32a852"},
                {id: 22, name: "runecraft", level:s.runecraft.level, xp:s.runecraft.xp, rank:s.runecraft.rank, color: "#32a852"},
                {id: 23, name: "hunter", level:s.hunter.level, xp:s.hunter.xp, rank:s.hunter.rank, color: "#32a852"},
                {id: 24, name: "construction", level:s.construction.level, xp:s.construction.xp, rank:s.construction.rank, color: "#32a852"}
            ]);
            this.props.setPressed(false)
        }).catch(error => console.log('error is', error));
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