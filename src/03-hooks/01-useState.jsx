import React, { useState } from "react";
//React Hooks
//Reason for using hooks
// 1.HOC help reuse, but cause the code to be too complicate
// 2. Complicate life cycle
// 3. Writing functional component, no state component, but
// later realize we need state, change to class. Too costly.
export default function App() {
  const [name, setName] = useState("pan");
  const [age, setage] = useState(100);

  return (
    <div>
      <button
        onClick={() => {
          setName("new Name");
          setage(18);
        }}
      >
        Click
      </button>
      App-{name}
    </div>
  );
}
