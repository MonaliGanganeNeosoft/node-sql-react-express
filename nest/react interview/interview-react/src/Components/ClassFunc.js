import React, { Component } from "react";

export default class ClassFunc extends Component {
  constructor() {
    super();
    this.state = {
      name: "Monali",
      age: 1,
      array: [1, 2, 3, 4, 5],
    };
  }
  changeStatus = () => {
    this.setState({ age: this.state.age * 2, name: "goli" });
  };
  render() {
    return (
      <>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <p>
          {this.state.array.map((item) => {
            return item * 2;
          })}
        </p>
        <button onClick={this.changeStatus}>change age</button>
      </>
    );
  }
}
