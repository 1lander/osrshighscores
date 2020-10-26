import React, {Fragment,useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
//import { Button } from '@material-ui/core';
//import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

export default function Skillinfo(props){

  useEffect(() => {
    console.log(props.location.skillProps)
  });

  const { skill } = this.props.location.skillProps

  return(
    <Fragment>
        <Typography>{skill.name}</Typography>
        <Typography>{skill.level}</Typography>
        <Link to={{
            pathname: "/"
        }}>Back</Link>
    </Fragment>
  );
}
