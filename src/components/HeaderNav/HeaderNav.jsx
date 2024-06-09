
import React from "react";
import {NavLink} from "react-router-dom";


export default function HeaderNav () {
  return (
        <div className="header-nav">
          <NavLink to="/"> <h1>The Meal</h1> </NavLink>
        </div>
      );
}