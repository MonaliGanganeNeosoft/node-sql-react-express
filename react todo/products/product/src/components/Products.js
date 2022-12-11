import React, { Component } from "react";
import data from "./data/products.json";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { proData: [] };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ proData: data.products });
    }, 2000);
  }
  render() {
    return (
      <>
        <h1>Products</h1>
        <ul>
          {this.state.proData.map((pro, index) => (
            <>
              <li key={index}>{pro.pname}</li>
              <li>{pro.price}</li>
            </>
          ))}
        </ul>
      </>
    );
  }
}

export default Products;
