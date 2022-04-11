const passwordValidator = require('password-validator');

// Schéma de mot de passe plus sécure
const passwordSchema = new passwordValidator();

// Contraintes du mot de passe
passwordSchema
.is().min(6)                                    // Longueur minimun : 6
.has().uppercase(1)                              // Doit avoir au moins une majuscule
.has().lowercase(1)                              // Doit avoir au moins une minuscule
.has().digits(1)                                 // Doit avoir au moins un chiffre
.has().not().spaces()                           // Ne doit pas avoir d'espaces (pas sur que ce soit une bonne régle)
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist de valeurs à proscrire

module.exports = passwordSchema;