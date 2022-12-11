import React, { Component } from "react";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: "1", Cname: "moni", city: "pune" },
        { id: "2", Cname: "goli", city: "pune" },
      ],
      update: 0,
      nooftasks: 1,
    };
  }
  handler = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };
  add = () => {
    let { tasks, Cname, city } = this.state;
    if (
      document.getElementById("Cname").value == "" ||
      document.getElementById("City").value == ""
    ) {
      alert("pls fill out fields");
    } else {
      this.setState({ tasks: [...tasks, { Cname: Cname, city: city }] });
      this.setState({ nooftasks: this.state.tasks.length });
      document.getElementById("Cname").value = " ";
      document.getElementById("City").value = " ";
    }
  };
  delete = (index) => {
    console.log("delete");
    var bool = window.confirm("do you really want to delete");

    if (bool == true) {
      let { tasks } = this.state;
      tasks.splice(index, 1);
      this.setState({ tasks: tasks });
      this.setState({ nooftasks: this.state.nooftasks - 1 });
    }
  };
  edit = (index) => {
    let { tasks, Cname, City, update } = this.state;
    this.setState({ update: index });
    document.getElementById("Cname").value = tasks[index].Cname;
    document.getElementById("City").value = tasks[index].city;
  };
  Update = (position) => {
    if (
      document.getElementById("Cname").value == "" ||
      document.getElementById("City").value == ""
    ) {
      alert("pls select tha task u want to update ?");
    } else if (window.confirm("Are you sure want to update")) {
      console.log("final update");
      let { tasks, Cname, city } = this.state;
      tasks[position].Cname = document.getElementById("Cname").value;
      tasks[position].city = document.getElementById("City").value;
      this.setState({ Cname: Cname, city: city });
      document.getElementById("Cname").value = "";
      document.getElementById("City").value = "";
    }
  };
  render() {
    return (
      <>
        <h1>Todo emp task</h1>
        <h1>Count:{this.state.nooftasks + 1}</h1>
        <label>Emp Company name</label>
        <input onChange={this.handler} name="Cname" id="Cname" />
        <br></br>
        <label>city name</label>
        <input onChange={this.handler} name="city" id="City" />
        <br></br>
        <button onClick={this.add}>Add</button>
        <button onClick={() => this.Update(this.state.update)}>
          Final Update
        </button>
        <div>
          <table className="table" border="3">
            <thead>
              <tr>
                <th>Sr no</th>
                <th>Cname</th>
                <th>Cproperty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tasks.map((task, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{task.Cname}</td>
                    <td>{task.city}</td>
                    <td>
                      <button onClick={() => this.edit(index)}>Edit</button>
                      <button onClick={() => this.delete(index)}>delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Todo;
