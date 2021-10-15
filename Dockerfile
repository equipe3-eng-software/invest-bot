#FROM node:16-alpine as base

FROM public.ecr.aws/n1b7i3q8/nodejs:latest as base

COPY . /

RUN npm install

CMD ["node", "src/index.js"]
