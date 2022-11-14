const express = require ('express');
const app = express();
const PORT = 3001;

app.get('*',function routeHandler(req,res) { 
    res.send('ok');
 });
 app.use(express.static('/'))
 app.get('/', (req, res) => res.send('Navigate to /send or /routes'));
 
 app.get('/send', (req, res) =>
   res.sendFile(path.join(__dirname, 'public/notes.html'))
 );



// app.get(req, res, () => {
//     res.send('http://localhost/3001')
// })