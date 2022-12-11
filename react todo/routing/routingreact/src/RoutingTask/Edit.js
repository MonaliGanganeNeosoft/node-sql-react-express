import React, { Component } from "react";
import axios from "axios";
const regForName = /^[a-zA-Z ]{2,100}$/;
const client = axios.create({
  baseURL: " http://localhost:3001/emp",
});

export class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empData: [],
      id: "",
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
  };
  componentDidMount = async () => {
    client
      .get()
      .then((res) => {
        console.log(res.data);
        this.setState({ empData: res.data });
      })
      .catch((err) => {
        console.log(err);
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

  empUpdate = async (event) => {
    let formData = {
      ename: this.state.ename,
      ecode: this.state.ecode,
    };
    client.put(`/${this.state.id}`, formData).then((res) => {
      client.get().then((res) => {
        this.setState({ empData: res.data });
      });
    });
  };
  empDelete = async (id, event) => {
    client.delete(`/${id}`).then((res) => {
      client.get().then((res) => {
        this.setState({ empData: res.data });
      });
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-dark ">
            <tr>
              <th>ID</th>
              <th>ENAME</th>
              <th>Ecode</th>
              <th>ACTION</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input
                  type="text"
                  name="ename"
                  id="ename"
                  onChange={this.handler.bind(this)}
                  placeholder="EName"
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  name="ecode"
                  id="ecode"
                  onChange={this.handler.bind(this)}
                  placeholder="ecode"
                ></input>
              </td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => this.empUpdate()}
                >
                  Update
                </button>
              </td>
            </tr>

            {this.state.empData.length > 0 ? (
              this.state.empData.map((emp, i) => (
                <tr key={i}>
                  <td>{emp.id}</td>
                  <td>{emp.ename}</td>
                  <td>{emp.ecode}</td>

                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => this.update(emp)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.empDelete(emp.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <p>no user found</p>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Edit;
