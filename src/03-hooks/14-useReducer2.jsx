import React, { useReducer } from "react";
import { useContext } from "react";

let initialState = {
  a: "AAA",
  b: "BBB",
  c: "CCC",
};

let reducer = (prevState, action) => {
  let newState = { ...prevState };
  switch (action.type) {
    case "change-b":
      newState.b = action.value;
      return newState;
    case "change-c":
      newState.c = action.value;
      return newState;
    default:
      return prevState;
  }
};

const GlobalContext = React.createContext();
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div>
        <ChildA></ChildA>
        <ChildB></ChildB>
        <ChildC></ChildC>
      </div>
    </GlobalContext.Provider>
  );
}

function ChildA() {
  const { dispatch } = useContext(GlobalContext);
  return (
    <div style={{ background: "yellow" }}>
      <button
        onClick={() => {
          dispatch({
            type: "change-b",
            value: "bbbbbbb",
          });
        }}
      >
        Change B
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "change-c",
            value: "ccccccc",
          });
        }}
      >
        Change C
      </button>
    </div>
  );
}
function ChildB() {
  const { state } = useContext(GlobalContext);
  return <div style={{ background: "red" }}>ChildB-{state.b}</div>;
}
function ChildC() {
  const { state } = useContext(GlobalContext);
  return <div style={{ background: "gray" }}>ChildC-{state.c}</div>;
}
