import React from "react";
import "./css/Groups.scss";
function Groups({name, color, initials, onSelect }) {
  return (
    <>
      <li onClick={onSelect} >
        <div className="Individual-heading" >
          <p id="Initials" style={{backgroundColor: color}}>{initials}</p>
          <span id="HeadingText">{name}</span>
        </div>
      </li>
    </>
  );
}

export default Groups;