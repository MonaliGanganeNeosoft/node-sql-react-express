import React from "react";
import { Link, Route } from "react-router-dom";
import MyContact from "./MyContact";

const Contact = ({ match }) => {
  return (
    <>
      <ul>
        <li>
          <Link to={`${match.url}/pune`}>Pune</Link>
        </li>
        <li>
          <Link to={`${match.url}/noida`}>Noida</Link>
        </li>
        <li>
          <Link to={`${match.url}/mumbai`}>Mumbai</Link>
        </li>
      </ul>
      <Route
        path={`${match.path}/:name`}
        render={(props) => (
          <>
            <h2>{props.match.params.name}</h2>
          </>
        )}
      />

      {/* for error->below */}

      {/* <Route path={`${match.path}/:name`} component={MyContact} /> */}
    </>
  );
};
export default Contact;
