import React from "react";
import { useReducer } from "react";

//prevState: previousState
//action is a object
const reducer = (prevState, action) => {
  console.log("Inside Reducer", prevState, action);
  let newState = { ...prevState };
  switch (action.type) {
    case "Minus":
      newState.count--;
      return newState;

    case "Plus":
      newState.count++;

      return newState;

    default:
      return prevState;
  }
};

const intialState = {
  count: 0,
};
export default function App() {
  //reducer: is use for external state management
  //dispatch: function use to change the state.
  //Similar to useState, but useState is use within the component
  //useReducer can be use outside the component.

  //state store the info, dispatch send out jobs to the reducer
  //reducer process the jobs
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "Minus",
          });
        }}
      >
        -
      </button>
      {state.count}
      <button
        onClick={() => {
          dispatch({
            type: "Plus",
          });
        }}
      >
        +
      </button>
    </div>
  );
}
