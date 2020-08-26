FROM node:11

RUN apt-get install bash

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @nestjs/cli@7.0.0

USER node

WORKDIR /home/node/app