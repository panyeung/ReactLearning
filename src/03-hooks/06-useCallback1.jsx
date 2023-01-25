import React from "react";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  //useState remember the state after component render
  //myCount get reset back to 0 after App rerender.
  var myCount = 0;
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
          myCount++;
        }}
      >
        Add
      </button>
      {count}-{myCount}
    </div>
  );
}
