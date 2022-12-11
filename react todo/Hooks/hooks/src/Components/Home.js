import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "./useFetch";

export default function Home() {
  let [count, setcount] = useState(89);
  const Increment = () => {
    setcount(count + 1);
  };
  const Decrement = () => {
    setcount(count - 1);
  };
  let Reset = () => {
    setcount((count = 0));
  };
  let [user, setUser] = useState({ name: "moni", age: 12, userData: [] });
  const posts = useFetch("https://jsonplaceholder.typicode.com/posts");
  let UserUpdate = () => {
    setUser({ ...user, name: "goli", age: 20 });
  };

  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    axios.get(URL).then((res) => {
      console.log(res.data);
      setUser({ ...user, userData: res.data });
    });
  }, []);

  return (
    <>
      <h1>Home</h1>
      <p>Count is :{count}</p>
      <button className="btn btn-primary" onClick={Increment}>
        Count + click
      </button>
      <br />
      <br />
      <button className="btn btn-primary" onClick={Decrement}>
        Count - click
      </button>
      <br />
      <br />
      <button className="btn btn-primary" onClick={Reset}>
        Count 0 click
      </button>
      <br />
      <br />
      <p>
        {user.name} and {user.age}
      </p>
      <button onClick={UserUpdate}>Clik user</button>
      <br></br>
      <br></br>
      <h4>User emails</h4>
      <ul>
        {user.userData.map((use, i) => (
          <>
            <li>{use.name}</li>
            <p>{use.username}</p>
            <hr />
          </>
        ))}
      </ul>
      <h1>Latest posts</h1>
      {posts.map((post) => (
        <div>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}
