import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Post() {
  const [posts, setPosts] = useState({ proData: [] });
  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    axios.get(URL).then((res) => {
      console.log(res.data);
      setPosts({ ...posts, proData: res.data });
    });
  }, []);

  return (
    <>
      <p>our own posts</p>
      <ul>
        {posts.proData.map((post, i) => (
          <>
            <li>{post.id}</li>
            <li>{post.title}</li>
            <li>{post.body}</li>
            <hr />
            <br />
          </>
        ))}
      </ul>
    </>
  );
}
