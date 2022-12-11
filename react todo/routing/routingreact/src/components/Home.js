import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../server/products.json";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { proData: [] };
  }
  componentDidMount() {
    const url = "http://localhost:3001/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ proData: data });
      });
  }
  render() {
    return (
      <>
        <h1>Products</h1>
        <div className="row">
          {this.state.proData.map((pro) => (
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5>{pro.pname}</h5>
                  <p>price:{pro.price}</p>
                  <Link to={`/productsdetails/${pro.id}`}>Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Home;
