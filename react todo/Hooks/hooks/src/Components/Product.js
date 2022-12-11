import React, { useState, useEffect } from "react";
import data from "../server/product.json";
import axios from "axios";

export default function Product() {
  const [prod, setProd] = useState({ proData: [] });
  useEffect(() => {
    const url = "http://localhost:3001/product";
    axios.get(url).then((res) => {
      console.log(res.data);
      setProd({ ...prod, proData: res.data });
    });
  }, []);
  return (
    <>
      <h1>Products display</h1>
      <div className="row">
        {prod.proData.map((pro, i) => (
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <>
                  <p>{pro.pname}</p>
                  <p>{pro.pric}</p>
                </>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
