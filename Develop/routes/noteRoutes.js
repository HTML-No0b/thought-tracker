const noteRoutes = require('express').Router();

noteRoutes.post();
noteRoutes.get('/notes', (req, res) => res.send('Visit http://localhost:3001/api'));

noteRoutes.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
)


