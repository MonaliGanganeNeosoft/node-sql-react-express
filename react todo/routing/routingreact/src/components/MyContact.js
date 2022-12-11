import React, { Component } from "react";

export class MyContact extends Component {
  state = { name: this.props.match.params.name };
  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h2>hii mycontact</h2>
      </div>
    );
  }
}

export default MyContact;
