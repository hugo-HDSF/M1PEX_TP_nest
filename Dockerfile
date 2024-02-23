FROM node:alpine

WORKDIR /app

COPY /package*.json ./

COPY . .

RUN npm i

EXPOSE 4000

CMD ["npm", "run", "start:dev"]