import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

  const useStyles = makeStyles({
      root: {
        height: '20px',
        color: '#ccbebe'
      },
      barColorPrimary: { backgroundColor: props => props.color}
    }
  );

function formatXp(xp, scale){
    if(scale === 99){
      if(xp > 13034431){
        xp = 13034431
      }
        return xp/130344.31;
    }else{
        return xp/2000000
    }
}

function Sort(skills, state){
  if(state == 'desc'){
    return skills.sort((a, b) => parseFloat(b.level) - parseFloat(a.level));
  }else if(state == 'asc'){
    return skills.sort((a, b) => parseFloat(a.level) - parseFloat(b.level));
  }
  //let filteredSkills
  /*let filteredSkills = skills.sort(function(a,b) {
    return parseFloat(a.level) - parseFloat(b.level);
  });*/

}


function Levelview(props){

      const classes = useStyles(props);

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
                  {props.name}
              </Typography>
          </Grid>
          <Grid item xs>
              <Typography>
                  {props.level}
              </Typography>
          </Grid>
          <Grid item xs>
              <LinearProgress 
                  classes={{root: classes.root, barColorPrimary: classes.barColorPrimary}}
                  variant="determinate" 
                  value={formatXp(props.xp, 99)}
              />
          </Grid>
          <Grid item xs>
              <Link
                style={{textDecoration: 'none'}}
                to={{
                  pathname: "/skillinfo",
                  skillProps: {
                      skill: props.skill
                }}}>
                <Button
                  style={{
                    background: props.color,
                  }}
                >more</Button>
              </Link>
          </Grid>
      </Grid>
      </Paper>
    );
  }

export default class Highscore extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidUpdate(){
        console.log(Sort(this.props.playerData, 'desc'));
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