import React from "react";
import { Link } from "react-router-dom";
function NavTab({ children, path }) {
  return (
    <div>
      <li class="nav-item">
        <Link class="nav-link active" to={path}>
          {children}
        </Link>
      </li>
    </div>
  );
}

export default NavTab;
