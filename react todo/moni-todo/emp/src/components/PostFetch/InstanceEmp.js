import React, { Component } from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3001/emp",
});

export class InstanceEmp extends Component {
  constructor(props) {
    super(props);
    this.state = { empData: [], ename: "", ecode: "", id: null };
  }
  componentDidMount() {
    client
      .get()
      .then((res) => {
        this.setState({ empData: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handler = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };
  addEmp = (event) => {
    event.preventDefault();
    let formData = { ename: this.state.ename, ecode: this.state.ecode };
    client.post("/", formData).then((res) => {
      client
        .get()
        .then((res) => {
          this.setState({ empData: res.data, ename: "", ecode: "" });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  deleteEmp = (id, event) => {
    event.preventDefault();
    client
      .delete(`${id}`)
      .then((res) => {
        client.get().then((res) => {
          this.setState({ empData: res.data, ename: "", ecode: "" });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  updateEmp = (id, event) => {
    event.preventDefault();
    console.log(id);
    client
      .get(`${id}`)
      .then((res) => {
        let data = res.data;
        this.setState({ ename: data.ename, ecode: data.ecode, id: id });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  afterUpdate = (event) => {
    let id = this.state.id;
    event.preventDefault();
    if (id === null) {
      alert("pls select to update emp");
    } else {
      let formData = { ename: this.state.ename, ecode: this.state.ecode };
      client
        .put(`${id}`, formData)
        .then((res) => {
          client.get().then((res) => {
            this.setState({
              empData: res.data,
              ename: "",
              ecode: "",
              id: null,
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  render() {
    return (
      <>
        <form className="container m-5">
          <h1>Axios instance baseUrl</h1>
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
            className="btn btn-primary"
            onClick={this.afterUpdate}
          >
            Update
          </button>
        </form>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Empid</th>
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
                      className="btn btn-info"
                      type="button"
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

export default InstanceEmp;
