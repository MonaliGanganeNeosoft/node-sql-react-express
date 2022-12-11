import React from "react";

const Eventhandling = () => {
  //   const getInput = (event) => {
  //     console.log(event.target.value);
  //   };

  const getInput = (event) => {
    console.log(event.target.name);
  };
  //   const addNumbers = () => {
  //     console.log(2 + 2);
  //   };
  const addNumbers = (n1, n2) => {
    console.log(n1 + n2);
  };
  return (
    <>
      <input
        type="text"
        placeholder="add something"
        onChange={getInput}
        name="input"
      />
      {/* <button onClick={addNumbers}>click me</button> */}
      <button onClick={() => addNumbers(2, 3)}>click me</button>
    </>
  );
};

export default Eventhandling;
