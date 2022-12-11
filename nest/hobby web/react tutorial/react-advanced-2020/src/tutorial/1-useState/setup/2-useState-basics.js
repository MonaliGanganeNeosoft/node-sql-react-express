import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("hello moni"));

  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState("random text");
  const handleClick = () => {
    if (text === "random text") {
      setText("hellow world");
    } else {
      setText("random text");
    }
  };
  return (
    <>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        change text
      </button>
    </>
  );
};

export default UseStateBasics;
