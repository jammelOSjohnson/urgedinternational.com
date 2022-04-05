FROM node:16-slim

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./wait-for-it.sh ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD [ "node", "dist/index.js" ]