import React, { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [name, setName] = useState("kerwin");

  useEffect(() => {
    setName(name.substring(0, 1).toUpperCase() + name.substring(1));
  }, [name]);
  //Execute first, and when the name change it will execute again.
  //name is the dependency.
  return (
    <div>
      App-{name}
      <button onClick={() => setName("xiaoming")}>Click</button>
    </div>
  );
}
