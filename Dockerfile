FROM node:14.17.3

WORKDIR /app

COPY src /app/src/

COPY package.json package-lock.json /app/

COPY .env /app/

RUN npm install

CMD npm start