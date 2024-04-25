import React from "react";
import "./css/ColorChoice.scss";
function ColorChoice({ colors, selectedColor, onColorSelect }) {
  return (
    <div className="ColorChoice">
      {colors.map((color) => (
        <button id="button"
          key={color}
          onClick={() => onColorSelect(color)}
          style={{
            backgroundColor: color,
            border: selectedColor === color ? "4px solid black" : "none", 
            opacity: selectedColor === color ? 1 : 0.8, 
          }}
        ></button>
      ))}
    </div>
  );
}

export default ColorChoice;
