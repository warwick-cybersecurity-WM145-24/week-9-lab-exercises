const express = require('express');
const router = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(process.env?.DB_PATH, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message)
    throw err
  } else {
    console.log('Connected to the SQLite database.')
  }
});


/* GET home page. */
router.get('/', (request, response) => {
  response.json({ title: "our cool content api", status: "all ok" });
});

/**
 * Get an poem based on a id
 */
router.get('/poem/:id', (request, response) => {
  const poemId = request.params?.id;
  db.get(`SELECT * FROM pages WHERE id=${poemId}`, function (err, row) {
    if (err) {
      console.log(err);
      response.status(500).json({ "error": err.message });
      return;
    }
    response.json(row);
  });

  //response.json(output);
});

/**
 * Create a new article
 */
router.post('/article', (request, response) => {
  response.statusCode = 201;
  response.json({ status: "Thanks for the new article" });
});

module.exports = router;
