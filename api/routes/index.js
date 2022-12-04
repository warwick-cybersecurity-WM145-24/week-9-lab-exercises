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
  const sql = `SELECT * FROM pages WHERE id=${poemId}`;
  db.get(sql, function (err, row) {
    if (err) {
      console.log(err);
      response.status(500).json({ "error": err.message });
      return;
    }
    console.debug({ sql, row });
    response.json(row);
  });

});

/**
 * Create a new poem
 */
router.post('/poem', (request, response) => {
  const body = request.body;
  console.log(body);

  const sql = `INSERT INTO pages VALUES ('${body.title}','${body.author}','${body.content}')`;

  db.all(sql, function (err, row) {
    if (err) {
      console.log(err);
      response.status(500).json({ "error": err.message });
      return;
    }
    console.debug({ row });
    response.json(row);
  });

});

module.exports = router;
