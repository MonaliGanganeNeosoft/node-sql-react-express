import React, { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUser = async () => {
    const res = await fetch(url);
    const users = await res.json();
    setUsers(users);
    console.log(users);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <h1>Github users</h1>
      <ul className="users">
        {users.map((user) => {
          const { name, id, email } = user;

          return (
            <>
              <li key={id}>
                <p>{name}</p>
                <h1>{id}</h1>
                <p>{email}</p>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
