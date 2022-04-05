const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); 

exports.userSignUp = (req,res,next) => {
    console.log("Je suis sur la route de l'inscription")
    bcrypt.hash(req.body.password, 10)
    .then(hash=>{
        const user = new User({
            email: req.body.email,
            password: hash
        })
        user.save()
        .then(() =>res.status(201).json({message : "Utilisateur crée"}))
        .catch(error => res.status(400).json({error})); 
    })
}

exports.userLogin = (req,res,next) => {
    console.log("Je suis sur la route de la connexion")
    
    
}
