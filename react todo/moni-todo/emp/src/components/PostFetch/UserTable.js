import React, { Component } from "react";

export class userTable extends Component {
  constructor(props) {
    super(props);
    this.state = { userData: [] };
  }
  componentDidMount() {
    const uri = "https://jsonplaceholder.typicode.com/users";
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ userData: data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        <h1>UserTable</h1>
        <table className="table">
          <thead className="table">
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">userName</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userData.map((user, i) => (
              <>
                <tr>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <hr />
      </>
    );
  }
}

export default userTable;
