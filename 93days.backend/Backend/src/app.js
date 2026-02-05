// it's use to create server

const express = require("express")
const noteModel = require("./models/note.model")

 const app = express()
 app.use(express.json());

 app.post('/api/notes', async (req,res)=>{
  const {description,age,title} = req.body

  const note = await noteModel.create({
    title,
    description,
    age,
  });

  res.status(201).json({
    message:"note created successfully",
    note
  })
 })

 module.exports = app