#!/bin/bash

# run a modsecurity enabled proxy in front of our application to protect it from OWASP attacks

docker run \
    -it \
    --network host \
    -p 80:80 \
    -e PORT=80 \
    -e PROXY=1 \
    -e SERVER_NAME=localhost \
    -e BACKEND=http://127.0.0.1:8080 \
    owasp/modsecurity-crs:nginx
