import React, { useState, useEffect } from "react";
const url = "https://jsonplaceholder.typicode.com/users/1";
const MultipleReturns = () => {
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");
  useEffect(() => {
    fetch(url)
      // .then((res) => res.json())
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(res.statusText);
        }
      })
      .then((user) => {
        console.log(user);
        const { name } = user;
        setUser(name);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  if (isloading) {
    return (
      <div>
        <h2>Loading ...</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }
  return (
    <>
      <h1>{user}</h1>
    </>
  );
};

export default MultipleReturns;
