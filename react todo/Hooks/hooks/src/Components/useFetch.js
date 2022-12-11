import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => setPosts(res.data));
  }, []);
  return posts;
}
