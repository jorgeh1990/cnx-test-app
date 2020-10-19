import React from "react";

function Dot({ color }) {
  var gradiant=""  
  switch (color) {
    case "Red":
      color = "#CB4335";
      break;
    case "Blue":
      color = "#5DADE2";
      break;
    case "Yellow":
      color = "#F7DC6F";
      break;
    case "Black":
      color = "#17202A";
      break;
    case "White":
      color = "#F0F3F4";
      break;
    case "Multi":
        gradiant = "linear-gradient(225deg, #FF3CAC 0%, #784BA0 53%, #2B86C5 100%)";
        color = ""
        break;  
    default:
      break;
  }
  const dot = {
    width: 20,
    height: 20,
    borderRadius: "50%",
    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
    backgroundImage: gradiant,
    backgroundColor: color,
  };
  return <div style={dot}></div>;
}

export default Dot;
