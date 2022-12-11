import React, { useState } from "react";

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: "Moni",
  //   age: 23,
  //   msg: "good night",
  // });
  const [name, setName] = useState("Moni");
  const [age, setAge] = useState(23);
  const [msg, setMsg] = useState("Random msg");
  // console.log(person);
  const changeMessage = () => {
    setMsg("hello world");
    // setPerson({ ...person, msg: "hello world" });
  };
  return (
    <>
      <h1>{name}</h1>
      <h4>{age}</h4>
      <h6>{msg}</h6>
      <button className="btn" onClick={changeMessage}>
        change msg
      </button>
    </>
  );
};

export default UseStateObject;
