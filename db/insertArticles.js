// provision an sqlite poetry db

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(process.env?.DB_PATH, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')
    }
});

db.run(`
    CREATE TABLE "pages" (
        "id"	INTEGER PRIMARY KEY AUTOINCREMENT,
        "title"     TEXT,
        "author"	TEXT,
        "content"	TEXT,
        "headerImage"	TEXT);
    `, (err) => {
    if (err && err.errno !== 1) {
        console.error({ msg: "Couldn't create table", err })
    }
})


/**
 * get some content for poetrydb and shove into our db
 * @see https://github.com/thundercomb/poetrydb#readme
 */
const getAuthors = fetch('https://poetrydb.org/author')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((allAuthors) => {
        // pick 10 authors at random to grab their content
        // first randomly shuffle the array then slice it
        let tmp = allAuthors.authors.sort(() => Math.random() - Math.random());
        let authors = tmp.slice(0, 10);
        return authors;
    })
    .then((authors) => {
        // for each of these authors setup a promise to get a poem
        return authors.map((author) => {
            return fetch(`https://poetrydb.org/author/${author}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(content => {
                    // shove content into our db
                    console.debug(`inserting ${content[0].title} into our db`);
                    new Promise((resolve, reject) => {
                        db.run(`
                        INSERT INTO pages
                        (title, author, content, headerImage)
                        VALUES
                        ('${content[0].title}', '${content[0].author}', '${content[0].lines}', 'https://place.dog/300/200');
                    `, (err) => {
                            if (err) {
                                // ignore error and carry on, some dodgy chars in some poems
                                //reject(err);
                            }
                            resolve();
                        });
                    });
                })
        });
    })
    .then((insertPromises) => {
        return Promise.all(insertPromises)
            .catch(err => {
                console.error({ msg: `Couldn't get and insert poem into db`, err })
            });
    })
    .catch(err => {
        console.error({ msg: "Couldn't get authors", err })
    });