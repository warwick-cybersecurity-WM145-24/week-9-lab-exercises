const http = require('http');
const querystring = require('querystring');
const serveStatic = require('serve-static');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(process.env?.DB_PATH, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message)
    throw err
  } else {
    console.debug('Connected to the SQLite database.')
  }
});

// serve up public folder contents
const servePublic = serveStatic('public', { index: 'index.html' });

const server = http.createServer((request, response) => {
  servePublic(request, response, () => {

    //GET /poems
    if (request.method == 'GET' && request.url === '/poems') {
      const sql = `SELECT * FROM poems ORDER BY id DESC LIMIT 1`;
      console.debug({ sql });
      db.get(sql, function (err, row) {
        if (err) {
          console.error(err);
          response.statusCode = 500;
          response.end(err.message);
        }

        // send output as json
        response.setHeader("Content-Type", "application/json");
        response.statusCode = 200;
        response.end(JSON.stringify(row));
      });
    }

    // insert a new poem
    if (request.method == 'POST') {
      let body = '';
      request.on('data', (data) => {
        body += data;
      });
      request.on('end', () => {
        const form = querystring.parse(body);
        const sql = `INSERT INTO poems (title) VALUES ("${form.title}");`;
        db.exec(sql, (err) => {
          if (err) {
            console.error({ err, sql });
            response.statusCode = 500;
            response.end();
          }
          console.debug({ sql });
          response.statusCode = 201;
          response.end();
        });
      });
    }
  });
});

// initialize database and start the server
db.on('open', () => {
  console.log(`Server running at http://127.0.0.1:${process.env?.NODE_PORT || 3000}/`);
  server.listen(process.env?.NODE_PORT || 3000);
});
