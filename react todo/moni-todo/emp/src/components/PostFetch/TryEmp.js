import React, { Component } from "react";
import axios from "axios";

export class TryEmp extends Component {
  constructor(props) {
    super(props);
    this.state = { empData: [], ename: "", ecode: "", id: null };
  }
  handler = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };
  componentDidMount = async () => {
    try {
      const url = "http://localhost:3001/emp";
      const res = await axios.get(url);
      this.setState({ empData: res.data });
    } catch (err) {
      console.log(err);
    }
  };
  addEmp = async (event) => {
    event.preventDefault();
    let formData = { ename: this.state.ename, ecode: this.state.ecode };
    try {
      const url = "http://localhost:3001/emp";
      const res = await axios.post(url, formData);
      const resData = await axios.get(url);
      this.setState({ empData: resData.data, ename: "", ecode: "" });
    } catch (err) {
      console.log(err);
    }
  };
  deleteEmp = async (id, event) => {
    event.preventDefault();
    try {
      const url = "http://localhost:3001/emp";
      const res = await axios.delete(`${url}/${id}`);
      const resData = await axios.get(url);
      this.setState({ empData: resData.data, ename: "", ecode: "" });
    } catch (err) {
      console.log(err);
    }
  };
  updateEmp = async (id, event) => {
    event.preventDefault();
    console.log(id);
    try {
      const url = "http://localhost:3001/emp";
      const res = await axios.get(`${url}/${id}`);
      let data = res.data;
      this.setState({ ename: data.ename, ecode: data.ecode, id: id });
    } catch (err) {
      console.log(err);
    }
  };
  afterUpdate = async (event) => {
    let id = this.state.id;
    event.preventDefault();
    if (id === null) {
      alert("pls select emp to update");
    } else {
      try {
        const url = "http://localhost:3001/emp";
        let formData = { ename: this.state.ename, ecode: this.state.ecode };
        const res = await axios.put(`${url}/${id}`, formData);
        const resData = await axios.get(url);
        this.setState({
          empData: resData.data,
          ename: "",
          ecode: "",
          id: null,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  render() {
    return (
      <>
        <h1>axios emp for try and catch method</h1>
        <form className="container m-5">
          <div className="form-group">
            <label>Ename</label>
            <input
              type="text"
              name="ename"
              value={this.state.ename}
              className="form-control"
              onChange={this.handler.bind(this)}
            />
          </div>
          <div className="form-group">
            <label>Ecode</label>
            <input
              type="text"
              name="ecode"
              value={this.state.ecode}
              className="form-control"
              onChange={this.handler.bind(this)}
            />
          </div>
          <input
            type="submit"
            className="btn btn-success"
            value="add"
            onClick={this.addEmp}
          />
          <button
            type="submit"
            className="btn btn-primary ml-3"
            onClick={this.afterUpdate}
          >
            Update
          </button>
        </form>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>EmpId</th>
              <th>Ename</th>
              <th>Ecode</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.empData.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.ename}</td>
                  <td>{data.ecode}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={this.updateEmp.bind(this, data.id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={this.deleteEmp.bind(this, data.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default TryEmp;
