const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const sauceRoutes = require("./routes/sauce");
const userRoutes = require("./routes/user");

mongoose.connect("mongodb+srv://Alexandra:p733Lds6fnU0OQXS@cluster0.ioilu.mongodb.net/Project0?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology:true})
.then(()=> console.log("Connection à MongoDB réussie !"))
.catch(()=> console.log("Connection à MongoDB échouée !"));

const app = express();

app.use(express.json());
  
app.use(cors())
app.use((req,res,next)=> {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);

module.exports = app;
