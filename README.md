# Week 9 lab exercises

Pwn an website

## app server

app sits in the `/app` directory:

to run
```bash

# install dependencies
(cd app && npm install)

# to start the server on port 3000
(cd app && npm start)

# to run the HURL tests
cd tests
cat getAPoem.hurl | hurl
```

## setup database

```bash
(cd db && npm i)
(cd db && DB_PATH=../poems.sqlite node insertPoems.js)
```

---



## Getting Started with SQL injection vulns


curl http://localhost:3000/poem/2


---
