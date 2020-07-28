import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Button } from '@material-ui/core';

import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

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
            <Grid item xs>
                <Link to={{
                    pathname: "/skillinfo",
                    skillProps: {
                        skill: this.props.skill
                    }
                }}>more</Link>
            </Grid>
        </Grid>
        </Paper>
      );
    }
  }

export default class Highscore extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            skills: [
                {id: 1, name: "overall", level:1, xp:0, rank:null},
                {id: 2, name: "attack", level:1, xp:0, rank:null},
                {id: 3, name: "defence", level:1, xp:0, rank:null},
                {id: 4, name: "strength", level:1, xp:0, rank:null},
                {id: 5, name: "hitpoints", level:1, xp:0, rank:null},
                {id: 6, name: "ranged", level:1, xp:0, rank:null},
                {id: 7, name: "prayer", level:1, xp:0, rank:null},
                {id: 8, name: "magic", level:1, xp:0, rank:null},
                {id: 9, name: "cooking", level:1, xp:0, rank:null},
                {id: 10, name: "woodcutting", level:1, xp:0, rank:null},
                {id: 11, name: "fletching", level:1, xp:0, rank:null},
                {id: 12, name: "fishing", level:1, xp:0, rank:null},
                {id: 13, name: "firemaking", level:1, xp:0, rank:null},
                {id: 14, name: "crafting", level:1, xp:0, rank:null},
                {id: 15, name: "smithing", level:1, xp:0, rank:null},
                {id: 16, name: "mining", level:1, xp:0, rank:null},
                {id: 17, name: "herblore", level:1, xp:0, rank:null},
                {id: 18, name: "agility", level:1, xp:0, rank:null},
                {id: 19, name: "thieving", level:1, xp:0, rank:null},
                {id: 20, name: "slayer", level:1, xp:0, rank:null},
                {id: 21, name: "farming", level:1, xp:0, rank:null},
                {id: 22, name: "runecraft", level:1, xp:0, rank:null},
                {id: 23, name: "hunter", level:1, xp:0, rank:null},
                {id: 24, name: "construction", level:1, xp:0, rank:null}
            ]}
    }

    componentDidUpdate(){
        console.log(this.props.playerData)
    }

    componentDidMount(){
        //const s = this.props.playerData.skills;
        console.log(this.props.prayerData)
    }

    render() {
        return(
           <div>
               {this.props.playerData.map((s) => <Levelview key={s.id} name={s.name} level={s.level} xp={s.xp} rank={s.rank} skill={s}></Levelview>)}
           </div>
      );
    }
  }