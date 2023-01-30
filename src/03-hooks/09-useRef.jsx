import React, { useState, useRef } from "react";

//Question:
/*
    What are some ways to store variable in React?
    1. useState
    2. useRef - see 10-useRef_storeValue.jsx
 */
export default function App() {
  const [list, setList] = useState(["aa", "bb", "cc"]);
  const mytext = useRef(); // React.createRef()

  const handleAdd = () => {
    console.log(mytext.current.value);

    // list.push("")
    setList([...list, mytext.current.value]);

    //清空
    // settext("")
    mytext.current.value = "";
  };

  const handleDel = (index) => {
    console.log(index);
    var newlist = [...list];
    newlist.splice(index, 1);
    setList(newlist);
  };
  return (
    <div>
      <input ref={mytext} />
      <button onClick={handleAdd}>add</button>
      <ul>
        {list.map((item, index) => (
          <li key={item}>
            {item}
            <button onClick={() => handleDel(index)}>del</button>
          </li>
        ))}
      </ul>

      {!list.length && <div>Nothing</div>}
    </div>
  );
}
