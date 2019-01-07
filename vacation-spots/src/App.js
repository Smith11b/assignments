import React, { Component } from 'react';
import Card from "./Card";

let vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring",
    id: 1
  },{
    place: "Cancun",
    price: 900,
    timeToGo: "Winter",
    id: 2
  },{
    place: "China",
    price: 1200,
    timeToGo: "Fall",
    id: 3
  },{
    place: "Russia",
    price: 1100,
    timeToGo: "Summer",
    id: 4
  },{
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring",
    id: 5
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {vacationSpots.map(card => {
          return (<Card key = {card.id} place = {card.place} price = {card.price} time = {card.timeToGo}/> )
        })}
      
      </div>
    );
  }
}

export default App;
