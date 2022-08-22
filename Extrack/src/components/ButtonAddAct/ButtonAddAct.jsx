import React from "react";

import "./ButtonAddAct.css";

function ButtonAddAct() {
    const buttonSize = {
        height: '70px'
    }
  return (
    <div>
      <a href='/new'>
        <img src="./assets/akar-icons_circle-plus-fill.png" alt="" style={buttonSize}/>
      </a>
    </div>
  );
}

export default ButtonAddAct;
