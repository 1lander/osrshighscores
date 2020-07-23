import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

function formatXp(xp, scale){
    if(scale === 99){
        return xp/130344.31;
    }else{
        return xp/2000000
    }
}

class Levelview extends React.Component {
    render() {
       return(
        <Paper style={{marginBottom: "10px"}}>
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
        >
            <Grid item xs>
                <Typography>
                    {this.props.name}
                </Typography>
            </Grid>
            <Grid item xs>
                <Typography>
                    {this.props.level}
                </Typography>
            </Grid>
            <Grid item xs>
                <LinearProgress 
                    variant="determinate" 
                    value={formatXp(this.props.xp, 99)}
                    style={{
                        colorPrimary: "red"
                    }}
                />
            </Grid>
        </Grid>
        </Paper>
      );
    }
  }

export default class Highscore extends React.Component {

    constructor(props){
        super(props)
        this.state = {skills: []}
    }

    componentDidMount(){
        const s = this.props.playerData.skills;
        //const b = this.props.playerData.bosses;

        this.setState({
            skills: [
                {id: 1, skill: "overall", level:s.overall.level, xp:s.overall.xp, rank:s.overall.rank},
                {id: 2, skill: "attack", level:s.attack.level, xp:s.attack.xp, rank:s.attack.rank},
                {id: 3, skill: "defence", level:s.defence.level, xp:s.defence.xp, rank:s.defence.rank},
                {id: 4, skill: "strength", level:s.strength.level, xp:s.strength.xp, rank:s.strength.rank},
                {id: 5, skill: "hitpoints", level:s.hitpoints.level, xp:s.hitpoints.xp, rank:s.hitpoints.rank},
                {id: 6, skill: "ranged", level:s.ranged.level, xp:s.ranged.xp, rank:s.ranged.rank},
                {id: 7, skill: "prayer", level:s.prayer.level, xp:s.prayer.xp, rank:s.prayer.rank},
                {id: 8, skill: "magic", level:s.magic.level, xp:s.magic.xp, rank:s.magic.rank},
                {id: 9, skill: "cooking", level:s.cooking.level, xp:s.cooking.xp, rank:s.cooking.rank},
                {id: 10, skill: "woodcutting", level:s.woodcutting.level, xp:s.woodcutting.xp, rank:s.woodcutting.rank},
                {id: 11, skill: "fletching", level:s.fletching.level, xp:s.fletching.xp, rank:s.fletching.rank},
                {id: 12, skill: "fishing", level:s.fishing.level, xp:s.fishing.xp, rank:s.fishing.rank},
                {id: 13, skill: "firemaking", level:s.firemaking.level, xp:s.firemaking.xp, rank:s.firemaking.rank},
                {id: 14, skill: "crafting", level:s.crafting.level, xp:s.crafting.xp, rank:s.crafting.rank},
                {id: 15, skill: "smithing", level:s.smithing.level, xp:s.smithing.xp, rank:s.smithing.rank},
                {id: 16, skill: "mining", level:s.mining.level, xp:s.mining.xp, rank:s.mining.rank},
                {id: 17, skill: "herblore", level:s.herblore.level, xp:s.herblore.xp, rank:s.herblore.rank},
                {id: 18, skill: "agility", level:s.agility.level, xp:s.agility.xp, rank:s.agility.rank},
                {id: 19, skill: "thieving", level:s.thieving.level, xp:s.thieving.xp, rank:s.thieving.rank},
                {id: 20, skill: "slayer", level:s.slayer.level, xp:s.slayer.xp, rank:s.slayer.rank},
                {id: 21, skill: "farming", level:s.farming.level, xp:s.farming.xp, rank:s.farming.rank},
                {id: 22, skill: "runecraft", level:s.runecraft.level, xp:s.runecraft.xp, rank:s.runecraft.rank},
                {id: 23, skill: "hunter", level:s.hunter.level, xp:s.hunter.xp, rank:s.hunter.rank},
                {id: 24, skill: "construction", level:s.construction.level, xp:s.construction.xp, rank:s.construction.rank}
            ]
        })
    }

    render() {
        return(
           <div>
               {this.state.skills.map((s) => <Levelview key={s.id} name={s.skill} level={s.level} xp={s.xp} rank={s.rank}></Levelview>)}
           </div>
      );
    }
  }