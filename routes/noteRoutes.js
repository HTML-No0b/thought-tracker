const noteRoutes = require('express').Router();
const fs = require('fs');
const path = require('path')
const dbJson = require('../db/db.json')
// const db = require('/Develop/db/db.json')
noteRoutes.get('/notes',(req,res)=>{
    const dbcopy = JSON.parse(fs.readFileSync('./db/db.json','UTF-8'));
    console.log(dbcopy)
    res.json(dbcopy)

    app.post('/notes', (req, res) => {
    req.body.id 
  
  });
});


module.exports = noteRoutes
