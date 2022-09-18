import express from 'express';

import { signin, signup } from '../controllers/user.js'

const router = express.Router(); //set up router

// router.get('/', getPosts); // '/' is the path. ONCE SOMEONE VISIT LOCALHOST 5000
router.post('/signin', signin); // '/' is the path. ONCE SOMEONE VISIT LOCALHOST 5000
router.post('/signup', signup); // '/' is the path. ONCE SOMEONE VISIT LOCALHOST 5000



export default router;

