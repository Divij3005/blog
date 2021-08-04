import express from 'express';
import {creatingPost,getAllPosts,getPost,interactivityUpdate} from '../controller/post-controller.js';
// import {addUser} from '..controller/user-controller.js';

const router = express.Router();

router.post('/create',creatingPost);

router.get('/posts',getAllPosts);

router.get('/post/:id',getPost);

router.post('/user-interactivity/:id',interactivityUpdate);

// router.post('/add-user',addUser);

export default router;