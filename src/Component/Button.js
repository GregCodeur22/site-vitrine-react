import React from "react";
import { NavLink } from "react-router-dom";

const Button = (props) => {
  return (
    <div className="scroll-button">
      {props.left && (
        <NavLink to={props.left} className="left hover">
          <span>
            <i class="fa-solid fa-chevron-right"></i>
          </span>
        </NavLink>
      )}
      {props.right && (
        <NavLink to={props.right} className="right hover">
          <span>
            <i class="fa-regular fa-chevron-left"></i>
          </span>
        </NavLink>
      )}
    </div>
  );
};

export default Button;
