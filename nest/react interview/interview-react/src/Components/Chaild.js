import React from "react";

const Chaild = ({ valueofProps, changeName }) => {
  return (
    <>
      <div>Chaild</div>
      <p>{valueofProps}</p>
      {/* <button onClick={changeName}>click me</button> */}
      <button onClick={() => changeName("Goli changed")}>click me</button>
    </>
  );
};

export default Chaild;
