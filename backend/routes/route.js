import express from 'express';
import {creatingPost,getAllPosts,getPost,interactivityUpdate} from '../controller/post-controller.js';

const router = express.Router();

router.post('/create',creatingPost);

router.get('/posts',getAllPosts);

router.get('/post/:id',getPost);

router.post('/user-interactivity/:id',interactivityUpdate);

export default router;