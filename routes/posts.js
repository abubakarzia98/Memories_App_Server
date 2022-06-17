import express from 'express';
const router = express.Router();

import {
  getPosts,
  getPostsBySearch,
  createPosts,
  updatePosts,
  deletePosts,
  likePost,
} from '../controllers/posts.js';
import auth from '../middleware/auth.js';

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.post('/', auth, createPosts);
router.patch('/:id', auth, updatePosts);
router.delete('/:id', auth, deletePosts);
router.patch('/:id/likePost', auth, likePost);

export default router;
