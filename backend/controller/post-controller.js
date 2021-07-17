import Post from '../schema/post-schema.js';

export const creatingPost = async (req,res) =>{
    try{
        const post = await new Post(req.body);
        post.save();
        res.status(200).json('blog saved successfully !!');
    }
    catch(err){
        res.status(500).json(err);
    }
}

export const getAllPosts = async (req,res) =>{
    try{
        let posts = await Post.find({});
        res.status(200).json(posts);
    }
    catch(err){
        res.status(200).json(err);
    }
}

export const getPost = async (req,res) =>{
    try{
        let post = await Post.findById(req.params.id);
        return res.status(200).json(post);
    }
    catch(err){
        res.status(500).json(err);
    }
}


export const interactivityUpdate = async (req,res) =>{
    try{
        await Post.findByIdAndUpdate(req.params.id,{ $set : req.body });
        res.status(200).json('updated interactivity');
    }
    catch(err){
        res.status(500).json(err);
    }
}

