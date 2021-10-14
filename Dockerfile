FROM node:16-alpine as base

COPY . /

RUN npm install

CMD ["npm", "src/index.js"]