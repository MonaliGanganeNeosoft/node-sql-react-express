import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul>
      <li>
        <Link to="/admin/posts">Admin</Link>
      </li>
      <li>
        <Link to="/admin/users">Users</Link>
      </li>
    </ul>
  );
};

export default Sidebar;
