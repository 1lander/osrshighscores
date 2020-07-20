import React from 'react';

export default class Highscore extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loading: true,
            hs: ""
        }
    }

    componentDidUpdate(){
        if(this.props.rsn !== ""){
            fetch(`http://localhost:8080/stats/${this.props.rsn}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ hs: data, loading: false });
                console.log(data)
            });
        }
    }

    render() {
       return(
         this.state.loading === false && <h2>{this.props.rsn}</h2>
      );
    }
  }