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
        <Paper style={{marginBottom: "10px", backgroundColor: this.props.color}}>
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
    }

    componentDidUpdate(){
        console.log(this.props.playerData)
    }

    componentDidMount(){
        console.log("component mounted")
    }

    render() {
        return(
           <div>
               {this.props.playerData.map((s) => <Levelview key={s.id} name={s.name} level={s.level} xp={s.xp} rank={s.rank} skill={s} color={s.color}></Levelview>)}
           </div>
      );
    }
  }