FROM node:16-alpine3.14

WORKDIR /app

COPY ./src /app/src
COPY ./public /app/public

COPY package.json /app/

RUN yarn --quiet 2>/dev/null
