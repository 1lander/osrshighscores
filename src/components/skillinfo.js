import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

export default class Skillinfo extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    render() {
        const { skill } = this.props.location.skillProps
        return(
           <div>
               <Typography>{skill.name}</Typography>
               <Typography>{skill.level}</Typography>
               <Link to={{
                    pathname: "/"
                }}>Back</Link>
           </div>
      );
    }
  }