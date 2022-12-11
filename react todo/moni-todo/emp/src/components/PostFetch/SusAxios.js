import React, { Component } from "react";
import axios from "axios";
const regForName = /^[a-zA-Z ]{2,100}$/;

const client = axios.create({
  baseURL: "http://localhost:3001/employee",
});

export class SusAxios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empData: [],
      ename: "",
      salary: 0,

      errors: { ename: "", salary: "", success: "" },
      enames: [],
      salaryes: [],
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
      case "salary":
        errors.salary = value < 500 ? "pls enter valid salary" : "";
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
  componentDidMount = async () => {
    client
      .get()
      .then((res) => {
        this.setState({ empData: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  addEmp = async (event) => {
    event.preventDefault();
    if (
      this.validate(this.state.errors) &&
      document.getElementById("ename").value !== "" &&
      document.getElementById("salary").value !== ""
    ) {
      console.log(this.state);
      var enames = this.state.enames;
      enames.push(this.state.ename);

      var salaryes = this.state.salaryes;
      salaryes.push(this.state.salary);

      this.setState({
        enames: enames,
        ename: "",
        salaryes: salaryes,
        salary: "",

        success: "Application Form submitted successfully",
      });
      let formData = { ename: this.state.ename, salary: this.state.salary };
      client.post("/", formData).then((res) => {
        client.get().then((res) => {
          this.setState({ empData: res.data });
          alert("Emp data added");
        });
      });
      document.getElementById("myForm").reset();
    } else {
      alert("pls enter valid data");
    }
  };

  empDelete = async (id, event) => {
    client.delete(`/${id}`).then((res) => {
      client.get().then((res) => {
        this.setState({ empData: res.data });
      });
    });
  };
  update(emp) {
    this.setState({
      id: emp.id,
      ename: emp.ename,
      salary: emp.salary,
    });
    document.getElementById("ename").value = emp.ename;
    document.getElementById("salary").value = emp.salary;
  }
  empUpdate = async (event) => {
    let formData = { ename: this.state.ename, salary: this.state.salary };
    client.put(`/${this.state.id}`, formData).then((res) => {
      client.get().then((res) => {
        this.setState({ empData: res.data });
      });
    });
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        <h1>axios instance and baseUrl both and async, await</h1>
        <form className="container" id="myForm">
          <div className="form-group">
            <label>Ename</label>
            <input
              type="text"
              className="form-control"
              id="ename"
              name="ename"
              placeholder="Enter ename"
              onChange={this.handler.bind(this)}
            />
            {errors.ename.length > 0 && (
              <small className="form-text" style={{ color: "red" }}>
                {errors.ename}
              </small>
            )}
          </div>
          <div className="form-group">
            <label>salary</label>
            <input
              type="number"
              className="form-control"
              id="salary"
              name="salary"
              placeholder="Enter salary"
              onChange={this.handler.bind(this)}
            />
            {errors.salary.length > 0 && (
              <small className="form-text" style={{ color: "red" }}>
                {errors.salary}
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
              <th>salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.empData.length > 0
              ? this.state.empData.map((emp, i) => (
                  <tr key={i}>
                    <td>{emp.id}</td>
                    <td>{emp.ename}</td>
                    <td>{emp.salary}</td>
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

export default SusAxios;
