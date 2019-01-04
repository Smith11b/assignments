import React from "react";
const getRandomColor = () => {
  const colors = ["blue", "red", "yellow", "purple"];
  const indexNum = Math.floor(Math.random() * colors.length);

  return colors[indexNum];
};

const Box = props => {
  const color = getRandomColor();

  return (
    <div style={{ backgroundColor: color, width: "600px", margin: "auto" }}>
      <h1>Title: {props.content.title}</h1>
      <h2>Subtitle: {props.content.subtitle}</h2>
      <p>Information: {props.content.information}</p>
    </div>
  );
};

export default Box;

console.log(1 == "1");
console.log(1 === "1");
