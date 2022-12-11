import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = "hello moni";
    console.log(title);
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" onClick={handleClick} className="btn">
        change name
      </button>
    </>
  );
};

export default ErrorExample;
