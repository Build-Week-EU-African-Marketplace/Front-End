import React from "react";
import "./button.css";

export function Button({ value, width,onClick }) {
  return (
    <div>
      <button onClick={onClick} style={{ width: width ? width : "100%" }} className="cmpt-btn">
        {value}
      </button>
    </div>
  );
}
