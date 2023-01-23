import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [list, setlist] = useState([]);
  useEffect(() => {
    axios.get("/test.json").then((res) => {
      console.log(res.data);
      setlist(res.data);
    });
  }, []);
  // Second Parameter is empty mean that it does not require any dependencies.
  //So it only render once. When empty, simulate component did mount.

  useEffect(() => {
    axios.get("/test.json").then((res) => {
      console.log(res.data);
      setlist(res.data);
    });
  }, [list]);
  // Do it first time, if name change it will also change.
  return (
    <div>
      {list.map((item) => (
        <li key={item.index}>{item.name}</li>
      ))}
    </div>
  );
}
