import React, { Component } from "react";

export class comment extends Component {
  constructor(props) {
    super(props);
    this.state = { commentData: [] };
  }
  componentDidMount() {
    const uri = "https://jsonplaceholder.typicode.com/comments";
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ commentData: data });
      })
      .then((err) => console.log(err));
  }

  render() {
    return (
      <>
        <h1>comment</h1>
        {this.state.commentData.map((comm, i) => (
          <>
            <p>{comm.name}</p>
            <p>{comm.email}</p> <hr />
          </>
        ))}
      </>
    );
  }
}

export default comment;
