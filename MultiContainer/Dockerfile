FROM node:14.16.0-alpine3.13

WORKDIR /app

COPY package.json /app

RUN npm install 

COPY . .

EXPOSE 8000

CMD ["node","index.js"]
