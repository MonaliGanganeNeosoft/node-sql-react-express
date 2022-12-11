import React, { Component } from "react";

export class Productdetails extends Component {
  state = { id: this.props.match.params.id, proData: "" };
  componentDidMount() {
    fetch("http://localhost:3001/products/" + this.state.id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ proData: data });
      });
  }

  render() {
    return (
      <>
        <h2>Products Details {this.state.id}</h2>
        <h4>Pname:{this.state.proData.pname}</h4>
        <h1>Price:{this.state.proData.price}</h1>
      </>
    );
  }
}

export default Productdetails;
