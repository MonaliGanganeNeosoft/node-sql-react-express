import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [fname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const hanldeSubmit = (e) => {
    e.preventDefault();
    // console.log(fname, email);
    if (fname && email) {
      const person = { id: new Date().getTime(), fname, email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
      console.log("submit the form");
    } else {
      console.log("empty values");
    }
  };
  return (
    <>
      <article>
        {/* <form className="form" onSubmit={hanldeSubmit}> */}
        <form className="form">
          <div className="form-control"></div>
          <label htmlFor="fname">Fname:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={fname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <div className="form-control"></div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <button type="submit" onClick={hanldeSubmit}>
            Add person
          </button> */}
        </form>
        <button type="submit" className="btn" onClick={hanldeSubmit}>
          Add person
        </button>
        {people.map((per, i) => {
          const { id, fname, email } = per;
          return (
            <div className="item" key={i}>
              <h6>{id}</h6>
              <h4>{fname}</h4>
              <h1>{email}</h1>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
