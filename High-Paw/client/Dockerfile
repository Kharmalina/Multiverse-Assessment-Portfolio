FROM node:16-alpine

ENV NODE_ENV=development

COPY . /client

WORKDIR /client

RUN npm install

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev"]