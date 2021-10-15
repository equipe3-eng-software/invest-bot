#FROM node:16-alpine as base

FROM public.ecr.aws/bitnami/node:latest as base

COPY . /

RUN npm install

CMD ["node", "src/index.js"]
