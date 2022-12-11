import React, { useState } from "react";

const DynamicInput = () => {
  const [inputs, setInputs] = useState({});
  const getInput = (data) => {
    // console.log(data.target.value);
    let { name, value } = data.target;
    let input = { [name]: value };
    setInputs({ ...inputs, ...input });

    // console.log(input);
  };
  console.log(inputs);
  return (
    <>
      <div>
        <input type="text" placeholder="name" name="name" onChange={getInput} />
        <input type="number" placeholder="age" name="age" onChange={getInput} />
        <input type="number" placeholder="yoe" name="yoe" onChange={getInput} />
      </div>
      <button>Addd new group</button>
    </>
  );
};

export default DynamicInput;
