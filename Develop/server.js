const express = require ('express');
const app = express();
const PORT = 3001;














app.get('*',function routeHandler(req,res) { 
    res.send('ok');
 });
 app.use(express.static('/'))
 app.get('/', (req, res) => res.send('Navigate to the index'));
 
 app.get('/send', (req, res) =>
   res.sendFile(path.join(__dirname, 'public/notes.html'))
 );

 app.get('/routes', (req,res)=> 
 res.sendFile(path.join(__dirname, 'public/notes.html'))
 )
 
 app.listen(PORT, () =>
   console.log(`Example app listening at http://localhost:${PORT}`)
 );

// app.get(req, res, () => {
//     res.send('http://localhost/3001')
// })