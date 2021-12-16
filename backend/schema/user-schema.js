import mongoose from 'mongoose';
// import passportLocalMongoose from 'passport-local-mongoose';



const UserSchema = mongoose.Schema({
    username: String,
    socialId: String,
    sex: String,
    age: Number,
});


// UserSchema.plugin(passportLocalMongoose);


// // mongodb atlas appends s at end of the cluster name ...
const user = mongoose.model('user',UserSchema);

export default user;

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     username: String,
//     socialId: String,
// });

// const User = mongoose.model("user", userSchema);

// module.exports = User;