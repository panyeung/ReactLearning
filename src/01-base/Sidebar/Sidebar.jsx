import React from "react";
import propTypes from "prop-types";
export default function Sidebar(props) {
  console.log(props);
  let { bg, position } = props;

  var obj1 = {
    left: 0,
  };

  var obj2 = {
    right: 0,
  };

  var obj = { background: bg, width: "200px", position: "fixed" };

  var style = position === "left" ? { ...obj, ...obj1 } : { ...obj, ...obj2 };

  return (
    <div style={style}>
      <ul>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
      </ul>
    </div>
  );
}
//Sidebar.defaultProps
Sidebar.propTypes = {
  bg: propTypes.string,
};
