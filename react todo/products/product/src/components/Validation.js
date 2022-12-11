import React, { Component } from "react";
const regForEmail = RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
class Validation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      errors: {
        email: "",
        password: "",
      },
    };
  }

  handler = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "email":
        errors.email = regForEmail.test(value) ? "" : "email is not valid";
        break;
      case "password":
        errors.password = value.length < 4 ? "psd must be 4 char long" : "";
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  };
  validate = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && valid.false);
    return valid;
  };
  formSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    if (this.validate(this.state.errors)) {
      alert("Valid Form");
    } else {
      alert("Invalid Form");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        <h2>Form validation</h2>
        <form onSubmit={this.formSubmit}>
          Email:
          <input type="text" name="email" onChange={this.handler} />
          {errors.email.length > 0 && (
            <span style={{ color: "red" }}>{errors.email}</span>
          )}
          <br></br>
          password:
          <input type="password" name="password" onChange={this.handler} />
          {errors.password.length > 0 && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
          <br></br>
          <input type="submit" value="submit" />
        </form>
      </>
    );
  }
}

export default Validation;
