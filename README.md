# Week 9 lab exercises

Pwn a website

## app server

app sits in the `/app` directory:

to run
```bash

# install dependencies
(cd app && npm install)

# to start the server on port 3000
(cd app && DB_PATH=../poems.sqlite npm start)

# to run the HURL tests
cd tests
cat getAPoem.hurl | hurl
```

## setup database

If you need a clean database
```bash
(cd db && npm install)
(cd db && DB_PATH=../poems.sqlite node insertPoems.js)
```

---



## Getting Started with SQL injection vulns


curl http://localhost:3000/poem/2


---
