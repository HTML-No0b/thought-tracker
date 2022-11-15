const noteRoutes = require('express').Router();
const fs = require('fs');
const path = require('path')

// const db = require('/Develop/db/db.json')
noteRoutes.get('/notes',(req,res)=>{
    const dbcopy = JSON.parse(readFileSync('../db/db.json','UTF-8'));
    
res.json(db);
});


module.exports = noteRoutes
