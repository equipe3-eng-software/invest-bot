FROM node:16-alpine as base

COPY . /

RUN npm install

CMD ["node", "src/index.js"]
