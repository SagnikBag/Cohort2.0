// it's use to create server

const express = require("express")
const noteModel = require("./models/note.model")
const cors =require('cors')
const path = require("path");

 const app = express()
 app.use(express.json());
 app.use(cors());
 app.use(express.static("../public"))

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

 app.get('/api/notes',async(req,res)=>{
  const note = await noteModel.find()

  res.status(200).json({

    message:"fetch data successfully",
    note
  })
 })

 app.delete('/api/notes/:id',async(req,res)=>{
  const id = req.params.id

   await noteModel.findByIdAndDelete(id)

  res.status(200).json({
    message:"Note deleted successfully"
  })
  
 })
app.patch('/api/notes/:id',async(req,res)=>{
  const id  = req.params.id
  const {description} = req.body

 await noteModel.findByIdAndUpdate(id,{description})

 res.status(200).json({
  message:"note patches successfully"
 })

})

app.use('*name',(req,res)=>{
  res.sendFile(path.join(__dirname,"..","/public/index.html"))
})
 module.exports = app