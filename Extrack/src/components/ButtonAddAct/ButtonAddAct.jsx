import React from "react";
import { Link } from "react-router-dom";
import "./ButtonAddAct.css";

function ButtonAddAct() {
    const buttonSize = {
        height: '70px'
    }
  return (
    <div>
      <Link to='/new'>
        <img src="./assets/plus-sign.png" alt="" style={buttonSize}/>
      </Link>
    </div>
  );
}

export default ButtonAddAct;
