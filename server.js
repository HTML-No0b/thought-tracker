const express = require('express');
const app = express();
const PORT = process.env.PORT||3001;
const noteRoutes = require('./routes/noteRoutes')
const path = require('path')
const allNotes = require('./db/db.json');
const { response, application } = require('express');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


console.log(__dirname)
app.use('/api', noteRoutes)
app.get('/', (req, res) => res.sendFile((path.join(__dirname, '/public/index.html'))));
app.get('/notes', (req, res) => res.sendFile((path.join(__dirname, '/public/notes.html'))));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));

});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
