import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    // console.log(id);
    // let newPeople = people.filter((p1) => p1.id !== id);
    // setPeople(newPeople);
    setPeople((oldpeople) => {
      let newPeople = oldpeople.filter((per) => per.id !== id);
      return newPeople;
    });
  };
  return (
    <>
      {people.map((per) => {
        const { id, name } = per;
        return (
          <div key={id} className="item">
            <p>{name}</p>
            <button className="btn" onClick={() => removeItem(id)}>
              delete
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
