import React, { Component } from "react";
import axios from "axios";
import Edit from "./Edit";
import NotFound from "./NotFound";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

const client = axios.create({
  baseURL: "http://localhost:3001/emp",
});

export class Homes extends Component {
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
  empDelete = async (id, event) => {
    client.delete(`/${id}`).then((res) => {
      client.get().then((res) => {
        this.setState({ empData: res.data });
      });
    });
  };

  render() {
    return (
      <>
        <Router>
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
              {this.state.empData.length > 0 ? (
                this.state.empData.map((emp, i) => (
                  <tr key={i}>
                    <td>{emp.id}</td>
                    <td>{emp.ename}</td>
                    <td>{emp.ecode}</td>
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
                <p>Not found</p>
              )}
            </tbody>
          </table>
        </Router>
      </>
    );
  }
}

export default Homes;
