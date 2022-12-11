import React, { Component } from "react";

export class Emp extends Component {
  constructor(props) {
    super(props);
    this.state = { empData: [], ename: "", ecode: "", update: 0 };
  }
  handler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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
        alert("Emp details added");
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            this.setState({ empData: data });
          });
      });
    document.querySelectorAll("input").forEach((element) => {
      element.value = "";
    });
  };
  deleteEmp(id) {
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
  }
  updateEmp(emp) {
    document.getElementById("ename").value = emp.ename;
    document.getElementById("ecode").value = emp.ecode;
    this.setState({
      update: 1,
      id: emp.id,
      ename: emp.ename,
      ecode: emp.ecode,
    });
  }
  update() {
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
    this.setState({ update: 0 });
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
    document.querySelectorAll("input").forEach((element) => {
      element.value = "";
    });
  }
  render() {
    return (
      <>
        <h1>Employee using fetch method</h1>
        <div className="container">
          <h2 className="text-center">Add Employee details</h2>
          <form onSubmit={this.addEmp}>
            <div className="form-grop">
              <label>EName:</label>
              <input
                type="text"
                id="ename"
                name="ename"
                className="form-control"
                onChange={this.handler}
              />
            </div>
            <div className="form-grop">
              <label>ECode:</label>
              <input
                type="text"
                id="ecode"
                name="ecode"
                className="form-control"
                onChange={this.handler}
              />
            </div>
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn btn-success"
              style={{ marginRight: "20px" }}
            />
            <input
              type="button"
              value="Update Details"
              onClick={() => this.update()}
              className="btn btn-success"
            />
          </form>

          <h2 className="emp table"></h2>
          <table className="w-100 m-auto table" border="3">
            <thead>
              <tr>
                <th>Id</th>
                <th>Ename</th>
                <th>Ecode</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.empData.map((emp) => (
                <tr>
                  <td>{emp.id}</td>
                  <td>{emp.ename}</td>
                  <td>{emp.ecode}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteEmp(emp.id)}
                      style={{ marginRight: "20px" }}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => this.updateEmp(emp)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Emp;
