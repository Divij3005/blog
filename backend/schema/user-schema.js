// import mongoose from 'mongoose';
// import passportLocalMongoose from 'passport-local-mongoose';



// const UserSchema = mongoose.Schema({
//     email:{
//         type:String,
//         required:true
//     },
//     name:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     posts:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"posts"
//     }
// });


// UserSchema.plugin(passportLocalMongoose);


// // mongodb atlas appends s at end of the cluster name ...
// const user = mongoose.model('user',UserSchema);

// export default user;