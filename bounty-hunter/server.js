const express = require('express');
require('dotenv').config();
const database = require('./database')



const app = express();

app.use(express.json());

app.get("/bounties", (req, res) => {
    return res.send(database.find());
})

app.get('/bounties/:id', (req, res) => {
    let id = req.params.id;
    return res.send(database.findOne(id));
})

app.post('/bounties', (req, res) =>{
    return res.send(database.save(req.body))
})



app.put('/bounties/:id', (req, res) => {
    let id = req.params.id;
   let  updatedBounty = database.findByIDAndUpdate(id, req.body);
   return res.send(updatedBounty);
    
})








app.listen(process.env.PORT, () => {
    return console.log('Watching your server mr.smith');
})
