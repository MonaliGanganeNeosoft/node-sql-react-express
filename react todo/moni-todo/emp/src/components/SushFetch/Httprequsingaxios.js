import React, { Component } from "react";
import axios from "axios";
export class Empfetchusingapi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empData: [],
      x: "",
      id: "",
      name: "",
      gender: "",
      salary: 0,
      profile: "",
    };
  }
  handler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  mainCall = async () => {
    try {
      const URL = "http://localhost:3001/employees";
      const res = await axios.get(URL);
      this.setState({ empData: res.data });
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount = async () => {
    this.mainCall();
    // fetch(URL)
    // .then(res=>res.json())
    // .then(data=>{
    //     this.setState({empData:data})
    // })
  };

  addEmp = async (event) => {
    try {
      event.preventDefault();
      let formData = {
        name: this.state.name,
        gender: this.state.gender,
        salary: this.state.salary,
        profile: this.state.profile,
      };
      const URL = "http://localhost:3001/employees/";
      const res = await axios.post(URL, formData);
      this.setState({ empData: res.data });
      this.mainCall();
    } catch (err) {
      console.log(err);
    }
    // fetch(URL,{
    //     method:"POST",
    //     body:JSON.stringify(formData),
    //     headers:{"Content-type":"application/json"}

    // })
    // .then(res=>res.json())
    // .then(data=>{
    //     alert("Employee Data Added")
    // })
    // fetch(URL)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         this.setState({empData:data})
    //     })
  };

  empDelete = async (id, event) => {
    try {
      // event.preventDefault();
      let formData = {
        name: this.state.name,
        gender: this.state.gender,
        salary: this.state.salary,
        profile: this.state.profile,
      };
      const URL = "http://localhost:3001/employees/";
      const link = `${URL}/${id}`;
      const res = await axios.delete(link);
      this.setState({ empData: res.data });
      this.mainCall();
    } catch (err) {
      console.log(err);
    }
    // debugger;
    // const URL = "http://localhost:3001/employees/"
    // const link = `${URL}/${id}`
    //  fetch(link,{
    //     method:"DELETE"
    // })
    // .then(res=>res.json())
    // .then(data=>{
    //     // alert("Employee Data Deleted")
    // })
    // fetch(URL)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         this.setState({empData:data})
    //     })
  };

  // maincall(){
  //     const URL="http://localhost:3001/employee";

  //     fetch(URL)
  //     .then(res=>res.json())
  //     .then(data=>{
  //         this.setState({
  //             empData:data
  //         })
  //     })
  // }
  update(emp) {
    this.setState({
      id: emp.id,
      name: emp.name,
      gender: emp.gender,
      salary: emp.salary,
      profile: emp.profile,
      x: 0,
    });
    document.getElementById("name").value = emp.name;
    document.getElementById("gender").value = emp.gender;
    document.getElementById("salary").value = emp.salary;
    document.getElementById("profile").value = emp.profile;
  }
  // put(){
  //     debugger;
  //     console.log(this.state.id)
  //     const URL="http://localhost:3001/employee"
  //     var newURL=`${URL}/${this.state.id}`
  //     let formData={name:this.state.name,gender:this.state.gender,salary:this.state.salary,profile:this.state.profile}
  //     fetch(newURL,{
  //         method:"put",
  //         body:JSON.stringify(formData),
  //         headers:{
  //             "Content-type":"application/json"
  //         }
  //     })
  //     .then(data=>{
  //         alert("Add Employee");
  //         this.maincall();
  //     })
  //     this.setState({
  //         x:1
  //     })

  //     document.getElementById('name').value="";
  //     document.getElementById('gender').value="";
  //     document.getElementById('salary').value="";
  //     document.getElementById('profile').value="";

  // }
  empUpdate = async (event) => {
    try {
      // debugger
      // event.preventDefault();
      let formData = {
        name: this.state.name,
        gender: this.state.gender,
        salary: this.state.salary,
        profile: this.state.profile,
      };
      const URL = "http://localhost:3001/employees/";
      const link = `${URL}/${this.state.id}`;
      const res = await axios.put(link, formData);
      this.setState({ empData: res.data });
      this.mainCall();
    } catch (err) {
      console.log(err);
    }
    // debugger;

    // const URL = "http://localhost:3001/employees"
    // var link = `${URL}/${this.state.id}`
    // let formData={"name":this.state.name,"gender":this.state.gender,"salary":this.state.salary,"profile":this.state.profile}
    // fetch(link,{
    //     method:"PUT",
    //     body:JSON.stringify(formData),
    //     headers:{"Content-type":"application/json"}
    // })
    // .then(res=>res.json())
    // .then(data=>{
    //     alert("Employee Data Updated")
    // })
    // fetch(URL)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         this.setState({empData:data})
    //     })
    // this.setState({x:1})
    // document.getElementById('name').value="";
    // document.getElementById('gender').value="";
    // document.getElementById('salary').value="";
    // document.getElementById('profile').value="";
  };

  render() {
    return (
      <>
        <form className="container" id="myForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              placeholder="Enter Name"
              onChange={this.handler.bind(this)}
            />
          </div>
          <div class="form-group">
            <label for="gender">Gender</label>
            <input
              type="text"
              class="form-control"
              id="gender"
              name="gender"
              placeholder="Enter Gender"
              onChange={this.handler.bind(this)}
            />
          </div>
          <div class="form-group">
            <label for="salary">Salary</label>
            <input
              type="number"
              class="form-control"
              id="salary"
              name="salary"
              placeholder="Enter Salary"
              onChange={this.handler.bind(this)}
            />
          </div>
          <div class="form-group">
            <label for="profile">Profile</label>
            <input
              type="text"
              class="form-control"
              id="profile"
              name="profile"
              placeholder="Enter Profile"
              onChange={this.handler.bind(this)}
            />
          </div>

          <button
            type="submit"
            name="submit"
            class="btn btn-primary"
            onClick={this.addEmp}
          >
            Submit
          </button>
          <button className="btn btn-success" onClick={this.empUpdate}>
            Update
          </button>
        </form>
        <hr />
        <table className="table">
          <thead className="thead-dark ">
            <tr>
              <th>NAME</th>
              <th>GENDER</th>
              <th>SALARY</th>
              <th>PROFILE</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.empData.length > 0 ? (
              this.state.empData.map((emp) => (
                <tr>
                  <td>{emp.name}</td>
                  <td>{emp.gender}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.profile}</td>
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
      </>
    );
  }
}

export default Empfetchusingapi;
