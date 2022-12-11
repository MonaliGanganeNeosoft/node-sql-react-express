import React, { Component } from "react";
import data from "./products.json";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proData: [],
      count: 0,
    };
  }
  componentDidMount() {
    this.setState({ proData: data.products });
  }
  addCart = (id) => {
    if (localStorage.getItem("mycart") != undefined) {
      let arr = JSON.parse(localStorage.getItem("mycart"));
      if (arr.includes(id)) {
        alert("Product alrady added");
      } else {
        arr.push(id);
        localStorage.setItem("mycart", JSON.stringify(arr));
        alert("Product added to cart");
        this.setState({ count: this.state.count + 1 });
      }
    } else {
      let arr = [];
      arr.push(id);
      localStorage.setItem("mycart", JSON.stringify(arr));
      alert("Product added to cart");
      this.setState({ count: this.state.count + 1 });
    }
  };

  render() {
    return (
      <>
        <nav class="nav">
          <a class="nav-link active" aria-current="page" href="#">
            Home
          </a>
          <a class="nav-link" href="#">
            About
          </a>
          <a class="nav-link" href="#">
            Cart:{this.state.count}
          </a>
          <a class="nav-link disabled">Disabled</a>
        </nav>
        <h1>Products display</h1>
        <div className="row container">
          {this.state.proData.map((pro, i) => (
            <div className="col-sm-4">
              <div
                className="card"
                style={{ width: "18rem", marginBottom: "20px" }}
              >
                <div className="card-body">
                  <p>
                    <h1>Id:{pro.id}</h1>
                    <h5>Nmae:{pro.pname}</h5>
                    Price:{pro.price}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.addCart(pro.id)}
                  >
                    Add Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Products;
