import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
/*import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";*/

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

function Sort(skills, state){
  if(state === 'desc'){
    return skills.sort((a, b) => parseFloat(b.xp) - parseFloat(a.xp));
  }else if(state === 'asc'){
    return skills.sort((a, b) => parseFloat(a.xp) - parseFloat(b.xp));
  }
}

function ExpBar(props){
  const classes = useStyles(props);
  return(
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress 
            classes={{root: classes.root, barColorPrimary: classes.barColorPrimary}}
            variant="determinate" 
            value={props.xp}
        />
      </Box>
      <Box minWidth={50}>
        <Typography>
          {`${Math.round(props.xp,)}%`}
        </Typography>
      </Box>
    </Box>
  )
}

function Levelview(props){
    return(
    <Paper style={{margin: "10px", padding: "10px"}} square>
      <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
      >
      <Grid item xs={2}>
        <Typography variant="h6">
            {props.name}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="h5">
            {props.level}
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <ExpBar xp={formatXp(props.xp, 99)} color={props.color}></ExpBar>
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
    return(
    <Paper style={{margin: "10px"}} square>
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
      <Grid item xs={1}>
        <Typography variant="h5">
            {props.level}
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <ExpBar xp={props.formattedXp} color={props.color}></ExpBar>
      </Grid>
    </Grid>
    <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
    >
        <Grid item xs>
            <Typography>
                Maxed stats: {props.achievments.amountMaxed.all}
            </Typography>
            <Typography>
                Maxed combat skills: {props.achievments.amountMaxed.combat}
            </Typography>
            <Typography>
                Maxed gather skills: {props.achievments.amountMaxed.gathering}
            </Typography>
            <Typography>
                Maxed artisan skills: {props.achievments.amountMaxed.artisan}
            </Typography>
            <Typography>
                Maxed support skills: {props.achievments.amountMaxed.support}
            </Typography>
            <Typography>
                All stats are {props.achievments.minSkill}+
            </Typography>
            <Typography>
                This player can access {props.achievments.minTotallvl} total worlds
            </Typography>
            <Typography>
                This player has achieved a minimum of {props.achievments.minTotalxp} xp
            </Typography>
        </Grid>
    </Grid>
    </Paper>
  );
}

export default class Highscore extends React.Component {

    componentDidUpdate(){
        Sort(this.props.playerData.skills, 'desc');
    }

    componentDidMount(){
        console.log("mounted")
    }

    render() {
        const overall = this.props.playerData.overall;
        const achievments = this.props.playerData.achievments;
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
                achievments={achievments}
              />
              {skills.map((s) => <Levelview key={s.id} name={s.name} level={s.level} xp={s.xp} rank={s.rank} skill={s} color={s.color} />)}
           </div>
      );
    }
  }