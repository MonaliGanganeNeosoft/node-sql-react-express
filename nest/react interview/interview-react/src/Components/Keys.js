import React from "react";

const Keys = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const details = [
    { name: "Moni", age: 25 },
    { name: "goli", age: 25 },
  ];
  return (
    <>
      <p>hello keys</p>
      {/* <ul>
        {numbers.map((no) => {
          return <li key={no}>{no}</li>;
        })}
      </ul> */}
      {/* {
        <ul>
          {details.map((det) => (
            <li key={det.age}>
              <p>{det.name}</p>
              <p>{det.age}</p>
            </li>
          ))}
        </ul>
      }
       */}
      {
        <ul>
          {details.map((det, index) => (
            <li key={index}>
              <p>{det.name}</p>
              <p>{det.age}</p>
            </li>
          ))}
        </ul>
      }{" "}
    </>
  );
};

export default Keys;
