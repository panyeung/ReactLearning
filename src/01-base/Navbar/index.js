import React, { Component } from "react";
import yeungProp from "prop-types";
console.log(yeungProp);
export default class Navbar extends Component {
  //define static props
  static defaultProps = {
    leftshow: true,
  };
  //variable a is define when object being created.
  a = 100;
  state = {
    //State can only use by the component. Cannot be use outside
    // of the component.
  };
  //props is pass by parent component.
  //We can access the props using this.props

  //rewrite the prop inside
  static propTypes = {
    title: yeungProp.string,
    leftshow: yeungProp.bool,
  };
  render() {
    console.log(this.props);
    {
    }
    let { title, leftshow } = this.props;
    return (
      <div>
        {leftshow && <button>Back</button>}
        navbar-{title}
        <button>home</button>
      </div>
    );
  }
}

//default props
// Navbar.defaultProps = {
//   leftshow: true,
// };

//Verify props type
//these variable does not need  navbar to get created.
// Navbar.propTypes = {
//   title: yeungProp.string,
//   leftshow: yeungProp.bool,
// };

class Test {
  a = 1;
}

Test.a = 100;
console.log(Test.a); //a=100 is variable belong to the class
console.log(new Test().a); // this a=1 is belong to the object
//you can defined class variable inside the class as well.

class Test2 {
  a = 1;
  static a = 100;
}
console.log(Test2.a); //a=100 is variable belong to the class
console.log(new Test2().a); // this a=1 is belong to the object

//With above knowledge we can rewrite our propType Inside.
