import React from 'react';

class Highscore extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hs: ""
        }
    }

    componentDidMount() {
        fetch(`http://localhost:8080/stats/${this.props.rsn}`)
            .then(response => response.json())
            .then(data => {
            this.setState({ hs: data, loading: false });
            });
      }

    render() {
        console.log(this.state.hs)
        return <h2>test</h2>;
    }
  }

export default Highscore;
