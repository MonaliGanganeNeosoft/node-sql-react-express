import React, { Component } from "react";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, Title: "js", body: "React" },
        { id: 2, Title: "html", body: "css" },
      ],
      update: 0,
      noOfTasks: 1,
    };
  }
  handler = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };
  add = () => {
    let { tasks, Title, body, noOfTasks } = this.state;
    if (
      document.getElementById("title").value == "" ||
      document.getElementById("desc").value == ""
    ) {
      alert("pls fill out field");
    } else {
      this.setState({ tasks: [...tasks, { Title: Title, body: body }] });
      this.setState({ noOfTasks: this.state.tasks.length });
      console.log(this.state.tasks.length);
      document.getElementById("title").value = " ";
      document.getElementById("desc").value = " ";
      console.log(this.state);
    }
  };

  delete = (index) => {
    console.log("delete");
    let noOfTasks = this.state.noOfTasks;
    var bool = window.confirm("Do you really want to delete this?");
    if (bool == true) {
      let { tasks } = this.state;
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks,
      });
      this.setState({ noOfTasks: this.state.noOfTasks - 1 });
      console.log(noOfTasks);
    }
  };

  edit = (index) => {
    let { tasks, Title, body, update } = this.state;
    this.setState({ update: index });
    console.log(this.state);
    document.getElementById("title").value = tasks[index].Title;
    document.getElementById("desc").value = tasks[index].body;
  };

  Update = (position) => {
    if (
      document.getElementById("title").value == "" ||
      document.getElementById("desc").value == ""
    ) {
      alert("pls select tasks that you want to update ?");
    } else if (window.confirm("Are you sure want to update this?")) {
      console.log("Final update");
      let { tasks, Title, body } = this.state;
      tasks[position].Title = document.getElementById("title").value;
      tasks[position].body = document.getElementById("desc").value;
      console.log(tasks[position].Title);
      console.log(tasks[position].body);
      this.setState({ Title: Title, body: body });
      document.getElementById("title").value = " ";
      document.getElementById("desc").value = " ";
    }
  };
  render() {
    return (
      <>
        <h1>Todo list</h1>
        <h1>
          No of Tasks are:
          <span className="red">count of tasks:{this.state.noOfTasks + 1}</span>
        </h1>
        <label>Title</label>
        <input onChange={this.handler} name="Title" id="title"></input>
        <br></br>
        <label>Description</label>
        <textarea
          onChange={this.handler}
          name="body"
          id="desc"
          cols="30"
          rows="3"
        ></textarea>
        <br></br>{" "}
        <div className="flex">
          <button className="btn" onClick={this.add}>
            Add task
          </button>
          <button
            className="btn"
            onClick={() => this.Update(this.state.update)}
          >
            Final Update
          </button>
          <br></br>
        </div>
        <div className="scroll">
          <table className="table" border="3">
            <thead>
              <tr>
                <th>Sr no</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tasks.map((task, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{task.Title}</td>
                    <td>{task.body}</td>
                    <td>
                      <button className="btn1" onClick={() => this.edit(index)}>
                        Edit
                      </button>
                      <button
                        className="btn2"
                        onClick={() => this.delete(index)}
                      >
                        Delete
                      </button>
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
