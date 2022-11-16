const noteRoutes = require('express').Router();
const fs = require('fs');
const path = require('path')
const dbcopy = require('../db/db.json')
// const db = require('/Develop/db/db.json')
noteRoutes.get('/notes', (req, res) => {
  const dbcopy = JSON.parse(fs.readFileSync('/db/db.json', 'UTF-8'));
  console.log(dbcopy)
  res.json(dbcopy)

  app.post('/notes', (req, res) => {
    let db = fs.readFileSync('../db/db.json');
    db = JSON.parse(db);
    res.json(db);
    let userNote = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid(),

    };
    db.push(userNote);
    fs.writeFileSync('/db/db.json', JSON.stringify(db));
    res.json(db)
  });
});


  module.exports = noteRoutes
