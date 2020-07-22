import React from "react";

export default class RsnForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {rsn: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlechange = this.handlechange.bind(this);
  }

  handleSubmit(e){
      e.preventDefault();
      fetch(`http://localhost:8080/stats/${this.state.rsn}`)
        .then(response => response.json())
        .then(data => {
            this.props.setPlayerdata(data.main)
        });
  }

  handlechange(e){
    this.setState({rsn: e.target.value})
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          RSN:
          <input
            type="text"
            value={this.state.rsn}
            onChange={this.handlechange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}