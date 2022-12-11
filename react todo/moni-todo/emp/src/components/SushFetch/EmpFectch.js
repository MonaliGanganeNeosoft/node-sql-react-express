import React, { Component } from "react";
import axios from "axios";
const regForName = /^[a-zA-Z ]{2,100}$/;

export class EmpFectch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empData: [],
      ename: "",
      ecode: "",

      errors: { ename: "", ecode: "", success: "" },
      enames: [],
      ecodes: [],
    };
  }
  handler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    let errors = this.state.errors;
    switch (name) {
      case "ename":
        errors.ename = regForName.test(value) ? "" : "Name is not valid";
        break;
      case "ecode":
        errors.ecode = regForName.test(value) ? "" : "ecode is not valid";
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  };
  validate = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };
  componentDidMount() {
    const url = "http://localhost:3001/emp";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ empData: data });
      });
  }
  addEmp = (event) => {
    event.preventDefault();
    if (
      this.validate(this.state.errors) &&
      document.getElementById("ename").value !== "" &&
      document.getElementById("ecode").value !== ""
    ) {
      console.log(this.state);
      var enames = this.state.enames;
      enames.push(this.state.ename);

      var ecodes = this.state.ecodes;
      ecodes.push(this.state.ecode);

      this.setState({
        enames: enames,
        ename: "",
        ecodes: ecodes,
        ecode: "",

        success: "Application Form submitted successfully",
      });
      let formData = { ename: this.state.ename, ecode: this.state.ecode };
      const url = "http://localhost:3001/emp";
      fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              this.setState({ empData: data });
            });
        });
      document.getElementById("myForm").reset();
    } else {
      alert("pls enter valid data");
    }
  };
  empDelete = (id) => {
    let url = `http://localhost:3001/emp/${id}`;
    fetch(url, {
      method: "DELETE",
    });
    url = "http://localhost:3001/emp";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            this.setState({ empData: data });
          });
      });
  };
  update(emp) {
    this.setState({
      id: emp.id,
      ename: emp.ename,
      ecode: emp.ecode,
    });
    document.getElementById("ename").value = emp.ename;
    document.getElementById("ecode").value = emp.ecode;
  }
  empUpdate() {
    let url = `http://localhost:3001/emp/${this.state.id}`;
    let formData = {
      ename: this.state.ename,
      ecode: this.state.ecode,
    };
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    });
    url = "http://localhost:3001/emp";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ empData: data });
      });
  }
  render() {
    const { errors } = this.state;

    return (
      <>
        <h1>fetch sush method</h1>
        <form className="container" id="myForm">
          <div className="form-group">
            <label>Ename</label>
            <input
              type="text"
              className="form-control"
              id="ename"
              name="ename"
              placeholder="entere ename"
              onChange={this.handler.bind(this)}
            />
            {errors.ename.length > 0 && (
              <small className="form-text" style={{ color: "red" }}>
                {errors.ename}
              </small>
            )}
          </div>
          <div className="form-group">
            <label>Ecode</label>
            <input
              type="text"
              className="form-control"
              id="ecode"
              name="ecode"
              placeholder="entere ecode"
              onChange={this.handler.bind(this)}
            />
            {errors.ecode.length > 0 && (
              <small className="form-text" style={{ color: "red" }}>
                {errors.ecode}
              </small>
            )}
          </div>
          <div>
            {errors.success.length > 0 && (
              <div className="alert alert-success" role="alert">
                {errors.success}
              </div>
            )}
            <button
              type="submit"
              name="submit"
              className="btn btn-primary"
              onClick={this.addEmp}
            >
              Submit
            </button>
            <button
              className="btn btn-success"
              onClick={() => this.empUpdate()}
            >
              Update
            </button>
          </div>
        </form>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Id</th>
              <th>Ename</th>
              <th>Ecode</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.empData.length > 0
              ? this.state.empData.map((emp, i) => (
                  <tr key={i}>
                    <td>{emp.id}</td>
                    <td>{emp.ename}</td>
                    <td>{emp.ecode}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => this.update(emp)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.empDelete(emp.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              : "No user found"}
          </tbody>
        </table>
      </>
    );
  }
}

export default EmpFectch;
