import React, { useState } from "react";
import Chaild from "./Chaild";

const PropsChild = () => {
  const [name, setName] = useState("Moni");
  // const changeName = () => {
  //   setName("goli");
  // };
  const changeName = (value) => {
    console.log(value);
    setName(value);
  };
  return (
    <>
      <Chaild valueofProps={name} changeName={changeName} />
      {/* <button onClick={() => setName("uday")}>click me</button> */}
    </>
  );
};

export default PropsChild;
