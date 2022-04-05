const mongoose = require("mongoose");
const{Schema} = require("mongoose")
const mongooseValidation = require("mongoose-unique-validator");

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

userSchema.plugin(mongooseValidation);

module.exports = mongoose.model("User", userSchema);