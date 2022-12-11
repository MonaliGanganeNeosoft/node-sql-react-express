import React, { Component } from "react";
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForName = /^[a-zA-Z ]{2,100}$/;
const regForMobile = /^[6-9][0-9]{9}$/;
const regForAddress = /^[a-zA-Z0-9\s\,\''\-]*$/;

class Vali1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: null,
      lname: null,
      email: null,
      password: null,
      confirmpassword: null,
      age: null,
      mobile: null,
      address: null,
      errors: {
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirmpassword: "",
        age: "",
        mobile: "",
        address: "",
      },
      fnames: [],
      lnames: [],
      emails: [],
      passwords: [],
      ages: [],
      mobiles: [],
      addresses: [],
    };
  }
  handler = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "fname":
        errors.fname = regForName.test(value) ? "" : "FName is not valid";
        break;
      case "lname":
        errors.lname = regForName.test(value) ? "" : "LName is not valid";
        break;
      case "email":
        errors.email = regForEmail.test(value) ? "" : "email is not valid";
        break;
      case "password":
        errors.password = value.length < 4 ? "psd must 4 char long" : "";
        break;
      case "confirmpassword":
        errors.confirmpassword =
          this.state.password !== value ? "Password does not match" : "";
        break;
      case "age":
        errors.age = value < 18 ? "age is not valid" : "";
        break;
      case "mobile":
        errors.mobile = regForMobile.test(value)
          ? ""
          : "pls enter valid mobile no";
        break;
      case "address":
        errors.address = regForAddress.test(value) ? "" : "not valid address";
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  };
  formSubmit = (event) => {
    event.preventDefault();
    if (
      this.validate(this.state.errors) &&
      document.getElementById("fname").value !== "" &&
      document.getElementById("lname").value !== "" &&
      document.getElementById("email").value !== "" &&
      document.getElementById("password").value !== "" &&
      document.getElementById("confirmpassword").value !== "" &&
      document.getElementById("age").value !== "" &&
      document.getElementById("mobile").value !== "" &&
      document.getElementById("address").value !== ""
    ) {
      alert("form submitted");
      var fnames = this.state.fnames;
      fnames.push(this.state.fname);

      var lnames = this.state.lnames;
      lnames.push(this.state.lname);

      var emails = this.state.emails;
      emails.push(this.state.email);

      var passwords = this.state.passwords;
      passwords.push(this.state.password);

      var ages = this.state.ages;
      ages.push(this.state.age);

      var mobiles = this.state.mobiles;
      mobiles.push(this.state.mobile);

      var addresses = this.state.addresses;
      addresses.push(this.state.address);

      this.setState({
        fnames: fnames,
        fname: "",

        lnames: lnames,
        lname: "",

        emails: emails,
        email: "",

        passwords: passwords,
        password: "",

        ages: ages,
        age: "",

        mobiles: mobiles,
        mobile: "",

        addresses: addresses,
        address: "",
      });
      document.getElementById("myForm").reset();
    } else {
      alert("pls enter valid data");
    }
  };
  validate = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  renderRows() {
    var context = this;
    return this.state.fnames.map(function (o, i) {
      return (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{o}</td>
          <td>{context.state.lnames[i]}</td>
          <td>{context.state.emails[i]}</td>
          <td>{context.state.passwords[i]}</td>
          <td>{context.state.ages[i]}</td>
          <td>{context.state.mobiles[i]}</td>
          <td>{context.state.addresses[i]}</td>
        </tr>
      );
    });
  }
  render() {
    const { errors } = this.state;

    return (
      <>
        <h1>Form validation</h1>
        <form onSubmit={this.formSubmit} id="myForm">
          <div className="row">
            <div className="form-group col-md-3">
              <label>Fname</label>
              <input
                type="fname"
                name="fname"
                id="fname"
                className="form-control"
                onChange={this.handler}
              />
            </div>
            {errors.fname.length > 0 && (
              <div
                className="alert alert-danger col-md-3 "
                style={{ color: "red" }}
              >
                {errors.fname}
              </div>
            )}
          </div>
          <br />
          <div className="row">
            <div className="form-group col-md-3">
              <label>Lname</label>
              <input
                type="lname"
                name="lname"
                id="lname"
                className="form-control"
                onChange={this.handler}
              />
            </div>
            {errors.lname.length > 0 && (
              <div
                className="alert alert-danger col-md-3 "
                style={{ color: "red" }}
              >
                {errors.lname}
              </div>
            )}
          </div>
          <br />
          <div className="row">
            <div className="form-group col-md-3">
              <label>Email</label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                onChange={this.handler}
              />
            </div>
            {errors.email.length > 0 && (
              <span
                className="alert alert-danger col-md-3"
                style={{ color: "red" }}
              >
                {errors.email}
              </span>
            )}
          </div>
          <div className="row">
            <div className="form-group col-md-3">
              <label>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                onChange={this.handler}
              />
            </div>
            {errors.password.length > 0 && (
              <span className="alert alert-danger" style={{ color: "red" }}>
                {errors.password}
              </span>
            )}
          </div>
          <div className="row">
            <div className="form-group col-md-3">
              <label>Confirm password</label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                className="form-control"
                onChange={this.handler}
              />
            </div>
            {errors.confirmpassword.length > 0 && (
              <span
                className="alert alert-danger col-md-3"
                style={{ color: "red" }}
              >
                {errors.confirmpassword}
              </span>
            )}
          </div>
          <div className="row">
            <div className="form-group col-md-3">
              <label>Age</label>
              <input
                type="number"
                id="age"
                name="age"
                className="form-control"
                onChange={this.handler}
              />
            </div>
            {errors.age.length > 0 && (
              <span
                className="alert alert-danger col-md-3"
                style={{ color: "red" }}
              >
                {errors.age}
              </span>
            )}
          </div>
          <div className="row">
            <div className="form-group col-md-3">
              <label>Mobile</label>
              <input
                type="number"
                id="mobile"
                name="mobile"
                className="form-control"
                onChange={this.handler}
              />
            </div>
            {errors.mobile.length > 0 && (
              <span
                className="alert alert-danger col-md-3"
                style={{ color: "red" }}
              >
                {errors.mobile}
              </span>
            )}
          </div>
          <div className="row">
            <div className="form-group col-md-3">
              <label>Address</label>
              <input
                type="address"
                id="address"
                name="address"
                className="form-control"
                onChange={this.handler}
              />
            </div>
            {errors.address.length > 0 && (
              <span className="alert alert-danger col-md-3">
                {errors.address}
              </span>
            )}
          </div>

          <br />
          <div className="form-group col-md-3">
            <input
              type="submit"
              value="submit"
              className="btn btn-primary"
              onClick={this.handler.bind("Submit")}
            />
          </div>
        </form>
        <br></br>
        <br></br>
        <table className="table container" border="1">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Fname</th>
              <th scope="col">Lname</th>
              <th scope="col">Email</th>
              <th scope="col">password</th>
              <th scope="col">age</th>
              <th scope="col">mobile</th>
              <th scope="col">address</th>
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
        </table>
      </>
    );
  }
}

export default Vali1;
