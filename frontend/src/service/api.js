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