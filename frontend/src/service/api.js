import axios from 'axios';

const URL = 'http://localhost:8000';

export const createPost = async (post) =>{
    try{
        return await axios.post(URL+'/create',post);
    }
    catch(err){
        console.log('Error while calling createPost API ',err);
    }
}

export const getAllPosts = async ()=>{
    try{
        let res =  await axios.get(URL+'/posts');
        return res.data;
    }
    catch(err){
        console.log('Error while calling getAllPosts API ',err);
    }
} 

export const getPost = async (id) =>{
    try{
        let res =  await axios.get(URL+'/post/'+id);
        return res.data;
    }
    catch(err){
        console.log('Error while calling getPost API ',err);
    }
}

export const interactivityUpdate = async (id,post) =>{
    try{
        return await axios.post(URL+'/user-interactivity/'+id,post);
    }
    catch(err){
        console.log('Error while calling interactivityUpdate API',err);
    }
}


export const getStats = async (topic) =>{
    try{
        let res = await axios.get('http://127.0.0.1:5000/read/'+topic);
        return res.data;
    }
    catch(err){
        console.log('Error while calling python API',err);
    }
}
