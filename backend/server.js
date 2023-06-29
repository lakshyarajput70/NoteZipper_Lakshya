const express = require('express')
const dotenv = require('dotenv')
const notes = require('./data/notes')
const app =express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send("API is Running")
    res.send(notes)
})

app.get('/api/notes',(req,res)=>{
    // res.send("API is Running")
    res.json(notes)
})

app.get('/api/notes/:id',(req,res)=>{
    const note = notes.find((n)=>n._id==req.params.id)
    res.send(note)
    console.log(req.params);

})

app.listen(PORT,console.log(`Server started on port ${PORT}`))

