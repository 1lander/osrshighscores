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
      this.props.setRsn(this.state.rsn);
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
            //onChange={e => this.props.setRsn(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}