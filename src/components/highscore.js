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
    }else if(scale === 200){
        return xp/2000000
    }
}

function calculateOverallXp(skills){
  let maxedSkillsxp = 0;
  skills.map((s) => {
    if(s.level === 99) {
      maxedSkillsxp += 13034431;
    }else{
      maxedSkillsxp += s.xp;
    }
  })
  return maxedSkillsxp/2997919.13
}

function skillsToMax(skills){
  let maxedSkills = {maxed: 0, notmaxed: 0};
  skills.map((s) => {
    if(s.level === 99) {
      maxedSkills.maxed++;
    }else{
      maxedSkills.notmaxed++;
    }
  })
  return maxedSkills
}

function Sort(skills, state){
  if(state === 'desc'){
    return skills.sort((a, b) => parseFloat(b.xp) - parseFloat(a.xp));
  }else if(state === 'asc'){
    return skills.sort((a, b) => parseFloat(a.xp) - parseFloat(b.xp));
  }
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
          <Grid item xs={2}>
              <Typography variant="h5">
                  {props.name}
              </Typography>
          </Grid>
          <Grid item xs={8}>
              <LinearProgress 
                  classes={{root: classes.root, barColorPrimary: classes.barColorPrimary}}
                  variant="determinate" 
                  value={formatXp(props.xp, 99)}
              />
          </Grid>
          <Grid item xs={2}>
              <Typography variant="h5">
                  {props.level}
              </Typography>
          </Grid>
          {/*<Grid item xs={2}>
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
            </Grid>*/}
      </Grid>
      </Paper>
    );
  }

function Overallview(props){
    const classes = useStyles(props);
    return(
    <Paper style={{marginBottom: "10px"}}>
    <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
    >
        <Grid item xs={2}>
            <Typography variant="h5">
                {props.name}
            </Typography>
        </Grid>
        <Grid item xs={8}>
            <LinearProgress 
                classes={{root: classes.root, barColorPrimary: classes.barColorPrimary}}
                variant="determinate" 
                value={props.formattedXp}
            />
        </Grid>
        <Grid item xs={2}>
            <Typography variant="h5">
                {props.level}
            </Typography>
        </Grid>
    </Grid>
    <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
    >
        <Grid item xs>
            <Typography variant="h5">
                Maxed stats: {props.maxedStats.maxed}
            </Typography>
        </Grid>
        <Grid item xs>
            <Typography variant="h5">
                fdsqfdsqfdsqfds
            </Typography>
        </Grid>
        <Grid item xs>
            <Typography variant="h5">
                gfsdgfdsgfds
            </Typography>
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
        Sort(this.props.playerData.skills, 'desc');
    }

    componentDidMount(){
        console.log("component mounted")
    }

    render() {
        const overall = this.props.playerData.overall;
        const skills = this.props.playerData.skills;
        return(
           <div>
              <Overallview 
                key={overall.id} 
                name={overall.name} 
                level={overall.level} 
                xp={overall.xp} 
                rank={overall.rank} 
                color={overall.color} 
                formattedXp={calculateOverallXp(skills)}
                maxedStats={skillsToMax(skills)}
              />
              {skills.map((s) => <Levelview key={s.id} name={s.name} level={s.level} xp={s.xp} rank={s.rank} skill={s} color={s.color} />)}
           </div>
      );
    }
  }