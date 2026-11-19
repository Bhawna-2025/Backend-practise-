const mongoose = require("mongoose")

async function connectToDB(){
    await mongoose.connect("mongodb+srv://pbhawna2023_db_user:JJAXcQAUAFpwrdko@cluster0.tuixbcg.mongodb.net/")
    console.log("DB is connected")
}

module.exports=connectToDB