FROM node:14 AS base

WORKDIR /home/node/storage

COPY package.json ./

RUN yarn install

COPY . .
