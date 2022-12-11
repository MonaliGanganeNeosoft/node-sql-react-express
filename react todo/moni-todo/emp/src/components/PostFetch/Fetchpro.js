import React, { Component } from "react";

export class Fetchpro extends Component {
  constructor(props) {
    super(props);
    this.state = { proData: [], count: 0, pname: "", price: "", update: 0 };
  }
  handler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  componentDidMount() {
    const uri = "http://localhost:3001/products";
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ proData: data });
      })
      .catch((err) => console.log(err));
  }
  addCart = (id) => {
    if (localStorage.getItem("mycart") != undefined) {
      let arr = JSON.parse(localStorage.getItem("mycart"));
      if (arr.includes(id)) {
        alert("Product Already added");
      } else {
        arr.push(id);
        localStorage.setItem("mycart", JSON.stringify(arr));
        alert("Product Addto Cart");
        this.setState({ count: this.state.count + 1 });
      }
    } else {
      let arr = [];
      arr.push(id);
      localStorage.setItem("mycart", JSON.stringify(arr));
      alert("Product Addto Cart");
      this.setState({ count: this.state.count + 1 });
    }
  };
  addProduct = (event) => {
    event.preventDefault();
    let formData = { pname: this.state.pname, price: this.state.price };
    const url = "http://localhost:3001/products";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Product added");
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            this.setState({ proData: data });
          });
      });
    document.querySelectorAll("input").forEach((element) => {
      element.value = "";
    });
  };
  deletePro = (id) => {
    let url = `http://localhost:3001/products/${id}`;
    fetch(url, {
      method: "DELETE",
    });
    url = "http://localhost:3001/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            this.setState({ proData: data });
          });
      });
  };
  updatePro(pro) {
    document.getElementById("pname").value = pro.pname;
    document.getElementById("price").value = pro.price;
    this.setState({
      id: pro.id,
      pname: pro.pname,
      price: pro.price,
    });
  }
  update() {
    let url = `http://localhost:3001/products/${this.state.id}`;
    let formData = {
      pname: this.state.pname,
      price: this.state.price,
    };
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    });
    this.setState({ update: 0 });
    url = "http://localhost:3001/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            this.setState({ proData: data });
          });
      });
    document.querySelectorAll("input").forEach((element) => {
      element.value = "";
    });
  }
  render() {
    return (
      <>
        <p>post Data</p>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Cart:{this.state.count}
            </a>
          </li>
        </ul>
        <div className="container">
          <h2>Add Product</h2>
          <form onSubmit={this.addProduct}>
            <div className="form-group">
              <label>Pname:</label>
              <input
                type="text"
                name="pname"
                id="pname"
                className="form-control"
                onChange={this.handler}
              />
            </div>
            <div className="form-group">
              <label>Price:</label>
              <input
                type="text"
                name="price"
                id="price"
                className="form-control"
                onChange={this.handler}
              />
            </div>
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary"
              style={{ marginRight: "20px" }}
            />
            <input
              type="button"
              value="Update Product"
              onClick={() => this.update()}
              className="btn btn-success"
            />
          </form>
        </div>
        <hr />
        <div className="row">
          {this.state.proData.map((pro, i) => (
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <p>{pro.id}</p>
                  <p>{pro.pname}</p>
                  <p>{pro.price}</p>
                  <button
                    className="btn btn-primary"
                    style={{ marginRight: "20px" }}
                    onClick={() => {
                      this.addCart(pro.id);
                    }}
                  >
                    Add cart
                  </button>
                  <button
                    onClick={() => this.deletePro(pro.id)}
                    className="btn btn-danger"
                    style={{ marginRight: "20px" }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => this.updatePro(pro)}
                  >
                    Edit
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

export default Fetchpro;
