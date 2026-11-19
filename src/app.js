const express = require("express")
const connectToDB = require("./db/db")
const noteModel = require("./models/notes.models")

connectToDB()

const app = express()
app.use(express.json())

// crud operations
app.post("/notes",async(req,res)=>{
    const data = req.body
    await noteModel.create({
       title:data.title,
       description:data.description
    })
    res.status(200).json({
        message:"notes created succesfully",
    })

})

app.get("/notes",async(req,res)=>{
    const notes=await noteModel.find()
    res.status(200).json({
        message:"Here are all the notes",
        notes:notes
    })
})

app.delete("/notes/:id",async(req,res)=>{
    const idx = req.params.id
    await noteModel.findOneAndDelete({
        _id:idx
    })
    res.status(200).json({
        message:"deleted successfully"
    })
})

app.patch("/notes/:id",async(req,res)=>{
    const idx = req.params.id
    const description = req.body.description
    const note = await noteModel.findOneAndUpdate(
       { _id:idx},{description:description},{new:true})

    res.status(200).json({
        message:"updated succesfully",
        note:note
    })
})

module.exports=app