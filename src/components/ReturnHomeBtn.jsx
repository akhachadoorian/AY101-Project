import React from "react";
import { Link } from "react-router-dom";

function ReturnHomeBtn({}) {
  return (
    <div className="return-home">
      <Link to={"/"} className="return">
        <div className="circle-btn">
          <i className="fa-solid fa-arrow-left-long"></i>
        </div>
        <span>Return to Home Page</span>
      </Link>
    </div>
  );
}

export default ReturnHomeBtn;
