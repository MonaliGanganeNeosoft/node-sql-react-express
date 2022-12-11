import React, { Component } from "react";
import axios from "axios";

export class EmpTry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empData: [],
      ename: "",
      ecode: "",
      update: "",
    };
  }
  handler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  validate = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };
  mainCall = async () => {
    try {
      const url = "http://localhost:3001/emp";
      const res = await axios.get(url);
      console.log(res.data);
      this.setState({ empData: res.data });
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount = async () => {
    this.mainCall();
  };
  addEmp = async (event) => {
    try {
      event.preventDefault();
      let formData = {
        ename: this.state.ename,
        ecode: this.state.ecode,
      };
      const URL = "http://localhost:3001/emp/";
      const res = await axios.post(URL, formData);
      this.setState({ empData: res.data });
      this.mainCall();
    } catch (err) {
      console.log(err);
    }
  };
  empDelete = async (id, event) => {
    try {
      // event.preventDefault();
      let formData = {
        ename: this.state.ename,
        ecode: this.state.ecode,
      };
      const URL = "http://localhost:3001/emp/";
      const link = `${URL}/${id}`;
      const res = await axios.delete(link);
      this.setState({ empData: res.data });
      this.mainCall();
    } catch (err) {
      console.log(err);
    }
  };
  update(emp) {
    this.setState({
      id: emp.id,
      ename: emp.ename,
      ecode: emp.ecode,
      update: 0,
    });
    document.getElementById("ename").value = emp.ename;
    document.getElementById("ecode").value = emp.ecode;
  }
  empUpdate = async (event) => {
    try {
      // debugger
      // event.preventDefault();
      let formData = {
        ename: this.state.ename,
        ecode: this.state.ecode,
      };
      const URL = "http://localhost:3001/emp/";
      const link = `${URL}/${this.state.id}`;
      const res = await axios.put(link, formData);
      this.setState({ empData: res.data });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <>
        <h1>try and catch sush method</h1>
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
          </div>
          <div>
            <button
              type="submit"
              name="submit"
              className="btn btn-primary"
              onClick={this.addEmp}
            >
              Submit
            </button>
            <button className="btn btn-success" onClick={this.empUpdate}>
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

export default EmpTry;
