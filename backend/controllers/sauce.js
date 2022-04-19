const Sauce = require('../models/sauce');

exports.createSauce = (req,res,next)=> {
  const sauceParse = JSON.parse(req.body.sauce)
  const sauce = new Sauce({
    ...sauceParse,
    imageUrl: "http://localhost:3000/images/"+ req.file.filename,
    likes:0,
    dislikes:0,
    usersLiked:[],
    usersDisliked:[],
  });
  sauce
    .save()
    .then(()=> res.status(201).json({message: "Sauce enregistrée !"}))
    .catch((error) => res.status(400).json({error}));
};

exports.getOneSauce = (req, res, next)=> {
  Sauce.findOne({_id: req.params.id})
  .then((sauce) => res.status(200).json(sauce))
  .catch((error) => res.status(404).json({error}));
};

exports.getAllSauces = (req, res, next)=> {
  Sauce.find()
  .then((sauces)=> res.status(200).json(sauces))
  .catch((error)=> res.status(400).json({error}));
};

exports.modifySauce = (req, res, next)=> {
  const sauce = new Sauce({
    ...sauceParse,
    imageUrl: "http://localhost:3000/images/"+ req.file.filename,
  });
  Sauce.updateOne({_id: req.params.id}, sauce)
  .then(()=> res.status(201).json({message: "Sauce modifée !"}))
  .catch((error)=> res.status(400).json({error}));
};

exports.likeDislike = (req, res, next)=> {
  Sauce.findOne({_id: req.params.id})
  .then((sauce)=> {
    if (req.body.like === 0){
      if (sauce.usersLiked.includes(req.body.userId) === true){
        sauce.usersLiked.splice(req.body.userId,1)
      }
      if (sauce.usersDisliked.includes(req.body.userId) === true){
        sauce.usersDisliked.splice(req.body.userId,1)
      }
    }
    if (req.body.like === 1){
      sauce.usersLiked.push(req.body.userId)
    }
    if (req.body.like === -1){
      sauce.usersDisliked.push(req.body.userId)
    }

    if (sauce.usersLiked.length === 0){
      sauce.likes = 0
    } else {
      sauce.likes = sauce.usersLiked.length
    }
    if (sauce.usersDisliked.length === 0){
      sauce.dislikes = 0
    } else {
      sauce.dislikes = sauce.usersDisliked.length
    }

    sauce.save()
    .then(()=> res.status (200).json(sauce))
    .catch(error => res.status (400).json({error}));
  }).catch((error)=> res.status(404).json({error}));
};

exports.deleteSauce = (req, res, next)=> {
  Sauce.findOne({_id: req.params.id})
    .then((sauce)=> {
    Sauce.deleteOne({_id: req.params.id})
      .then(()=> res.status(200).json({message: "Sauce supprimée !"}))
      .catch((error)=> res.status(400).json({error}));
    })
};