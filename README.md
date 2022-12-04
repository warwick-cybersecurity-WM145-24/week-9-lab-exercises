# Week  9 lab exercises

Pwn an website

## Our blog webpage

Webpage sits in the `/webpage` directory.

to run locally:
```bash
(cd webpage && python -m http.server)
```

## Api content server

API sits in the `/api` directory:

to run
```bash

# install dependencies
(cd api && npm install)

# to start the server on port 3000
(cd api && npm start)

# to run the HURL tests
cd tests
cat getAPoem.hurl | hurl
```

---

## Getting Started with SQL injection vulns


curl http://localhost:3000/poem/2

curl -X POST http://localhost:3000/poem/ -d 'title=hackhack' -d 'author=hackauthor' -d 'content=hackcontent' -d 'headerImage=hackimage' -d 'id=hackme'