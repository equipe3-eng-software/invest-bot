#FROM node:16-alpine as base

FROM 727792597635.dkr.ecr.us-east-1.amazonaws.com/imagegold:latest as base

COPY . /

RUN npm install

CMD ["node", "src/index.js"]
