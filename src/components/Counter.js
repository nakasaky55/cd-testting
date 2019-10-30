import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Counter() {
  const [count, setCount] = useState(5);

  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <h1>INCREMENT APP</h1>
      <div className="counter">
        <p className="count">{count}</p>
        <button id="increase-button" onClick={increase}>
          Increase
        </button>
      </div>
    </div>
  );
}
