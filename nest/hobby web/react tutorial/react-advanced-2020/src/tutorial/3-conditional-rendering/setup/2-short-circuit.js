import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [iserror, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";
  // console.log(secondValue);

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h2>Value:{secondValue}</h2> */}
      {/* {if(){console.log("hello world")}} */}
      <h1>{text || "Moni gangane"}</h1>
      <button className="btn" onClick={() => setIsError(!iserror)}>
        toggle error
      </button>
      {text && <h1>hello worl</h1>}
      {iserror && <h1>Error...</h1>}
      {iserror ? <h1>there is error...</h1> : <h2>no error...</h2>}
      {/* {!text && <h1>hello world</h1>} */}
    </>
  );
};

export default ShortCircuit;

// import React from "react";
// import { useState } from "react";

// const ShortCircuit = () => {
//   const [text, setText] = useState("");
//   const [iserror, setIsError] = useState(false);
//   return (
//     <>
//       <button
//         className="btn"
//         onClick={() => {
//           setIsError(!iserror);
//         }}
//       >
//         Toogele error
//       </button>
//       <p> {!text && "Moni not"}</p>
//       <p>{text || "Moni text "}</p>
//       {iserror ? "Error" : "no error"}
//     </>
//   );
// };

// export default ShortCircuit;
