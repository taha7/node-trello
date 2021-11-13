FROM node:14 AS base

WORKDIR /home/node/server

COPY package.json ./

RUN yarn install

COPY . .

FROM base as production

ENV NODE_PATH=./build

RUN yarn build