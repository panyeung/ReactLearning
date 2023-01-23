import React, { Component } from "react";

//This is the normal class
// class Test {
//     constructor(){
//         this.a = 1;
//     }

//     testa() {
//         console.log("testa")
//     }
// }

// class ChildTest extends Test {
//     testb(){
//         console.log("Testb");
//     }
// }

//1.class Name need to be uppercase
//2.Return need to be come with parenthesis unless it is single line.
class App extends Component {
  render() {
    return (
      <Section>
        <div>Hello App</div>
      </Section>
    );
  }
}

export default App;
