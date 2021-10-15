#FROM node:16-alpine as base

FROM public.ecr.aws/e4e1h9a9/nodejs:latest as base

COPY . /

RUN npm install

CMD ["node", "src/index.js"]
