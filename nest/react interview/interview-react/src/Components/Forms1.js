import React, { useState } from "react";

const Forms1 = () => {
  const [objectdata, setObjectdata] = useState({});
  const getInput = (value, name) => {
    // console.log(value, name);
    // console.log({ [name]: value });
    let data = { [name]: value };
    // setObjectdata({ ...data });
    setObjectdata({ ...objectdata, ...data });
  };
  //   console.log(objectdata);
  //   const Submit = () => {
  //     console.log(objectdata);
  //   };

  const submit = (event) => {
    event.preventDefault();
    console.log(objectdata);
  };
  return (
    <>
      <form onClick={submit}>
        <input
          type="text"
          placeholder="enter name"
          name="name"
          onChange={(event) => getInput(event.target.value, event.target.name)}
        />
        <br />
        <input
          type="number"
          placeholder="age"
          name="age"
          onChange={(event) => getInput(event.target.value, event.target.name)}
        />
        <br />
        <input
          type="text"
          placeholder="hobbies"
          name="hobbies"
          onChange={(event) => getInput(event.target.value, event.target.name)}
        />
        <br />
        <input
          type="date"
          placeholder="date jk"
          name="date"
          onChange={(event) => getInput(event.target.value, event.target.name)}
        />
        <br />
        {/* <button onClick={Submit}>Submit</button> */}

        <button type="submit">Submit</button>
        <hr />
        <button type="reset">Reset</button>
      </form>
    </>
  );
};

export default Forms1;
