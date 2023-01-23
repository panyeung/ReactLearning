import React, { Component } from "react";
import { useEffect } from "react";

export default class App extends Component {
  state = {
    isCreated: true,
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              isCreated: !this.state.isCreated,
            });
          }}
        >
          Click
        </button>
        {this.state.isCreated && <Child></Child>}
      </div>
    );
  }
}

function Child() {
  useEffect(() => {
    window.onresize = () => {
      console.log("resize");
    };

    var timer = setInterval(() => {
      console.log("1111");
    }, 1000);

    //this return work like ComponentDid unmount
    return () => {
      console.log("Component Destroy");
      window.onresize = null;
      clearInterval(timer);
    };
  }, []);
  return <div>child</div>;
}

//Difference between useLayoutEffect and useEffect:
//useLayoutEffect: when react finish DOM update it will immediately called useLayoutEffect.
//This may interfer the page render.
//useEffect: it is call when the entire page is finish render.
//Offical document recomment to use useEffect. Only use useLayoutEffect if useEffect cause a problem.
//So when do we use useLayoutEffect?
//In pratice when you try to prevent page rerender(This happen when you change DOM in useEffect)
// You can put that code that change DOM inside the useLayoutEffect.Once finish the DOM change then
//render.
