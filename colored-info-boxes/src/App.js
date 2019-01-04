import React, { Component } from 'react';
import Box from "./Box"
import './App.css';


const box1 = {title:"Town is Quiet, The (Ville est tranquille, La)", subtitle:"Drama",information:"Pnctr w/o foreign body of l mid finger w/o damage to nail"}
const box2 = {title: "Headless Body in Topless Bar","subtitle":"Comedy|Drama|Thriller","information":"Unsp injury of blood vessels at ank/ft level, unsp leg, subs"}
const box3 = {"title":"Downtown","subtitle":"Action|Comedy","information":"Nondisp commnt fx shaft of humer, unsp arm, 7thG"}
const box4 = {"title":"Dallas Buyers Club","subtitle":"Drama","information":"Laceration without foreign body, right ankle, subs encntr"}
const box5 = {"title":"Livid (Livide)","subtitle":"Fantasy|Horror","information":"Malignant neoplasm of isthmus uteri"}
const box6 = {"title":"Cadaver Christmas, A","subtitle":"Comedy|Horror","information":"Osteolysis, hand"}
const box7 = {"title":"Legend of the Guardians: The Owls of Ga'Hoole","subtitle":"Adventure|Animation|Fantasy|IMAX","information":"Displ commnt suprcndl fx w/o intrcndl fx r humer, 7thG"}
const box8 = {"title":"No Rest for the Brave (Pas de repos pour les braves)","subtitle":"Comedy|Drama|Romance","information":"Food in trachea causing asphyxiation, initial encounter"}
const box9 = {"title":"Between Your Legs (Entre las piernas)","subtitle":"Drama|Mystery|Romance|Thriller","information":"Corrosions of oth parts of left eye and adnexa, sequela"}
const box10 = {"title":"Maurice","subtitle":"Drama|Romance","information":"Nondisp transverse fx shaft of unsp tibia, 7thH"}







class App extends Component {

  constructor(props){
    super(props);

  }


  render() {
    return (
      <div>
      <Box  content = {box1} />
      <Box content = {box2} />
      <Box content = {box3} />
      <Box content = {box4} />
      <Box content = {box5} />
      <Box content = {box6} />
      <Box content = {box7} />
      <Box content = {box8} />
      <Box content = {box9} />
      <Box content = {box10} />
      </div>

    )
  }
}

export default App;
