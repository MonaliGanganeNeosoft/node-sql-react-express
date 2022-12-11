// import React from "react";

// const States = () => {
//   let count = 0;
//   const incr = () => {
//     count = count + 1;
//     console.log(count);
//   };
//   return (
//     <>
//       <div>
//         <p>{count}</p>
//         <button onClick={incr}>click me</button>
//       </div>
//     </>
//   );
// };

// export default States;

import React from "react";
import { useState } from "react";

const States = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [visible, setisvisbale] = useState(false);
  const [array, setarray] = useState([
    { name: "Moni", age: 2 },
    { name: "goli", age: 3 },
  ]);
  const incr = () => {
    setCount(count + 1);
    setisvisbale(!visible);
    setName("Monali");
  };
  return (
    <>
      <p>{count}</p>
      <p>{name}</p>

      {visible ? <h1>Visible</h1> : <h1>Not visible</h1>}
      <button onClick={incr}>click me</button>
      <br />
      <hr />
      {array.map((arr) => {
        return <p>{arr.name}</p>;
      })}
    </>
  );
};

export default States;
