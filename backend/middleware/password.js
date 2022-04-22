const passwordSchema = require("../models/password");

module.exports = (req,res,next)=> {
    if (!passwordSchema.validate(req.body.password)){
        res.writeHead(400, "{'message ':'Mot de passe requis'}", {
            "content-type": "application/json"
        });
        res.end("Mot de passe non valide");
    } else {
        next();
    }
};

