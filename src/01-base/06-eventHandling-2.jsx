import React, { Component } from "react";

export default class App extends Component {
  //React event handling is not bind to a particular
  //html tag,
  a = "app";
  render() {
    return (
      <div>
        <input></input>
        <button
          onClick={() => {
            console.log("clicked" + this.a);
            //the this inside this arrow function is the same as the
            //render(), render method "this" is point to the class App.
            //not recommend when there is a lot of logic
          }}
        >
          Add1
        </button>
        <button onClick={this.handleClick.bind(this)}>
          Add2-Not recommend
        </button>
        <button onClick={this.handleClick3}>Add3-Recommend</button>
        <button
          onClick={() => {
            //recommend for passing parameter
            this.handleClick4();
          }}
        >
          Add4
        </button>
      </div>
    );
  }

  handleClick() {
    console.log("click2", this.a);
    //"this" in this case is undefined.
    //One rule to remember is that "this" refer to the calling object.
    //In this case, it is the react event manager

    //we can use bind(this) to reassign the "this"
  }

  //es7 feature define function
  handleClick3 = () => {
    console.log("click3", this.a);
    //it will work fine because it is a arrow function.
    //Same as method 1
  };

  handleClick4 = () => {
    console.log("click4", this.a);
    //it will work fine because it is a arrow function.
    //Same as method 1
  };
}

/*
    call, change "this", and execute function
    apply, same as "call" method
    bind, change "this" but not execute function. Need to add () to execute
    
  */
var obj1 = {
  name: "obj1",
  getName() {
    console.log("The first getName " + this.name);
  },
};

var obj2 = {
  name: "obj2",
  getName() {
    console.log("The second getName " + this.name);
  },
};
obj1.getName();
//output: The first getName obj1
//The calling object is obj1, so "this" refer to obj1
obj1.getName.call(obj2);
//output: The first getName obj2
//the "call" method work like this, first it will find the
//getName method for the calling object(obj1) then it will
//reassign "this" to obj2 before it call getName method.
//The "call" method automatically execute the getName method
//we do not need to use () for getName.

obj2.getName.bind(obj1)();
//output: The second getName obj1
//bind reassign "this" to obj1, we need to add () to execute.
