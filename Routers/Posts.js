const express = require('express');
const router = express.Router();
const postsController = require('../Controllers/Posts')

router.post("", postsController.postCreatePost);
router.get("", postsController.getAllPosts);
router.get("/:id", postsController.getPostByID);
router.patch("/:id", postsController.patchUpdatePostByID);
router.delete("/:id", postsController.deletePostByID);

module.exports = router;