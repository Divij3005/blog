import express from 'express';
import {creatingPost,getAllPosts,getPost} from '../controller/post-controller.js';

const router = express.Router();

router.post('/create',creatingPost);

router.get('/posts',getAllPosts);

router.get('/post/:id',getPost);

export default router;