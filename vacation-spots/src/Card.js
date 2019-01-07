import React from "react";

let colors = ["green", "red", "orange", "white"];

function Card(props) {
  return (
    <div
      className="card"
      style={
        props.time === "Spring"
          ? { backgroundColor: colors[0] }
          : props.time === "Fall"
          ? { backgroundColor: colors[1] }
          : props.time === "Summer"
          ? { backgroundColor: colors[2] }
          : { backgroundColor: colors[3] }
      }
    >
      <h1>Destination: {props.place}</h1>
      <h3>Price: ${props.price}</h3>
      <p>Best time to Travel: {props.time}</p>
      <p className="price">
        {props.price > 1000 ? "$$$" : props.price > 500 ? "$$" : "$"}
      </p>
    </div>
  );
}

export default Card;
