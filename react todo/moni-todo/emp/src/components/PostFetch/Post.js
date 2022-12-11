import React, { Component } from "react";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { postData: [] };
  }
  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ postData: data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        <h1>Posta latest</h1>
        {this.state.postData.map((post, i) => (
          <>
            <p>Title:{post.title}</p>
            <p>Body:{post.body}</p>
            <hr />
            <br />
            <br />
          </>
        ))}
      </>
    );
  }
}
