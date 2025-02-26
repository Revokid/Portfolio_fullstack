const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const BlogPost = require('../models/BlogPost');

// Homepage route
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    const blogPosts = await BlogPost.find();
    res.render('index', { projects, blogPosts });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;