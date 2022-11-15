const htmlRoutes = require('express').Router();
const path = require('path')

htmlRoutes.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
)

module.exports = htmlRoutes