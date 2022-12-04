const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');

/* GET home page. */
router.get('/', (request, response) => {
  response.json({ title: "our cool content api", status: "all ok" });
});

/**
 * Get an article based on a random ID
 */
router.get('/article/:id', (request, response) => {
  const articleId = parseInt(request.params?.id);
  let output = {
    articleId,
    title: faker.animal.cat(),
    subHeading: faker.animal.cat(),
    content: faker.lorem.paragraph(150),
    headerImage: faker.image.cats(),
    datePublished: faker.date.recent()
  };

  response.json(output);
});

/**
 * Create a new article
 */
router.post('/article', (request, response) => {
  response.statusCode = 201;
  response.json({ status: "Thanks for the new article" });
});

module.exports = router;
