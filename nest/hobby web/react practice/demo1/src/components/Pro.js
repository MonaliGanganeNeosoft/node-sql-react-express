import React from "react";
import { product } from "./data";

const Pro = () => {
  const clickHandler = (e) => {
    console.log(e.target);
    alert("Hello");
  };
  return (
    <>
      <p>Products</p>
      {product.map((d, i) => {
        return (
          <>
            <div
              key={i}
              className="card"
              style={{
                width: "18rem",
                marginTop: "10px",
                backgroundColor: "yellow",
              }}
            >
              <h1>{d.id}</h1>
              <div className="card-body">
                <h5 className="card-title">{d.pname}</h5>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={clickHandler}
                >
                  click me
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Pro;
