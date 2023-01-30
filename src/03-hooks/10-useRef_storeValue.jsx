import React, { useState, useRef } from "react";

export default function App() {
  const [count, setcount] = useState(0);
  //useState 记忆函数， 记住状态

  var mycount = useRef(0);
  //.current is initialize by the value 0
  //The mycount.current will keep track of the store value.

  // var handleClick = ()=>{

  // }
  return (
    <div>
      <button
        onClick={() => {
          setcount(count + 1);
          // mycount++

          mycount.current++;
        }}
      >
        add
      </button>
      {count}-{mycount.current}
    </div>
  );
}