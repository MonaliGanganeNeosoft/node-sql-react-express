import React, { Component } from "react";
import axios from "axios";
const regForName = /^[a-zA-Z ]{2,100}$/;
const client = axios.create({
  baseURL: " http://localhost:3001/emp",
});

export class Add extends Component {
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
    let errors = this.state.errors;
    switch (name) {
      case "ename":
        errors.ename = regForName.test(value) ? "" : "name is not valid";
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

  addEmp = (event) => {
    event.preventDefault();
    if (
      this.validate(this.state.errors) &&
      document.getElementById("ename").value !== "" &&
      document.getElementById("ecode").value !== ""
    ) {
      //   console.log(this.state);
      var enames = this.state.enames;
      enames.push(this.state.ename);
      var ecodes = this.state.ecodes;
      ecodes.push(this.state.ecode);

      this.setState({
        enames: enames,
        ename: "",
        ecodes: ecodes,
        ecodes: "",

        success: "application submitted succesfully",
      });

      let formData = { ename: this.state.ename, ecode: this.state.ecode };
      client.post("/", formData).then((res) => {
        client.get().then((res) => {
          console.log(res.data);
          this.setState({ empData: res.data });
          alert("emp added");
        });
      });
      document.getElementById("myForm").reset();
    } else {
      alert("pls enter valid data");
    }
  };
  render() {
    const { errors } = this.state;
    return (
      <>
        <div>
          <form className="container" id="myForm">
            <div className="form-group">
              <label>Ename</label>
              <input
                type="text"
                className="form-control"
                id="ename"
                name="ename"
                placeholder="pls enter ename"
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
                placeholder="pls enter ecode"
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
                  {errors.success}{" "}
                </div>
              )}
              <br />
              <button
                type="submit"
                name="submit"
                className="btn btn-primary"
                onClick={this.addEmp}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Add;
