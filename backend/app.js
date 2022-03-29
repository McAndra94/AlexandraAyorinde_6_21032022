const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json())

mongoose.connect("",{
    useNewUrlParser: true,useUnifiedTopology:true
}).then(()=> console.log("Connection réussie")).catch(()=> console.log("Connection échouée"))
app.use(cors())

module.exports = app