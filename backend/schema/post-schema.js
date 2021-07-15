import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    date:{
        type:Date
    },
    content:{
        type:String,
        required:true
    },
    like:{
        type:Number
    },
    dislike:{
        type:Number
    }

});

// mongodb atlas appends s at end of the cluster name ...
const post = mongoose.model('post',PostSchema);

export default post;
 