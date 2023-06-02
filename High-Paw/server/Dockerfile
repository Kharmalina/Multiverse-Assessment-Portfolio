FROM node:16-alpine

ENV NODE_ENV=development

COPY . /server

WORKDIR /server

RUN npm install

EXPOSE 8000

CMD [ "node", "server.js" ]