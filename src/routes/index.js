const express = require('express');
const articles = require('../data/articles');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Hello world' });
});

router.get('/articles', (req, res) => {
  res.send(articles);
});

router.get('/articles/:id', (req, res) => {
  const slug = req.params.id;

  const articleFound = articles.filter((article) => article.slug === slug);

  res.send(articleFound);
});

module.exports = router;
