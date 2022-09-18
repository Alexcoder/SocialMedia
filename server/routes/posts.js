import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'
import auth from '../middleware/auth.js';


const router = express.Router(); //set up router
//start adding routes below

router.get('/', getPosts); // '/' is the path. ONCE SOMEONE VISIT LOCALHOST 5000
router.post('/', createPost); // '/' is the path. ONCE SOMEONE VISIT LOCALHOST 5000
router.patch('/:id', updatePost); //Updating existing post on database, this was added after front end
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost);

export default router; //NOW GO TO INDEX JS AND IMPORT THE ROUTER

