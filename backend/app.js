const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userRouter = require("./routes/user")

const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://Alexandra:p733Lds6fnU0OQXS@cluster0.ioilu.mongodb.net/Project0?retryWrites=true&w=majority",{
    useNewUrlParser: true,useUnifiedTopology:true
}).then(()=> console.log("Connection réussie")).catch(()=> console.log("Connection échouée"))
app.use(cors())

app.use("api/auth",userRouter)

module.exports = app