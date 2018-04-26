FROM node:8.6.0-alpine

WORKDIR /app

ADD package.json package-lock.json /app/

RUN npm install

COPY . /app

CMD ["node", "index.js"]
