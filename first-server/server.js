const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const database = require("./database.js");

app.get("/cosmicBeverages", (req, res) => {
  res.send(database.find());
});
app.get("/cosmicBeverages/:id", (req, res) => {
  const id = req.params.id;
  res.send(database.findOne(id));
});

app.post("/cosmicBeverages", (req, res) => {
  const beverageToSave = req.body;
  const savedBeverage = database.save(beverageToSave);
  res.status(200).send(savedBeverage);
});

app.delete("/cosmicBeverages/:id", (req, res) => {
  const id = req.params.id;

  database.findByIDAndRemove(id);
  res.status(204).send();
});

app.put("/cosmicBeverages/:id", (req, res) => {
  const id = req.params.id;
  const updater = req.body;
  database.findByIDAndUpdate(id, updater);
  res.status(201).send(updater);
});

app.listen(process.env.PORT, () =>
  console.log("Watching your server Mr Smith")
);
