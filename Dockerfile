FROM node:alpine

WORKDIR /app

COPY /package*.json ./

RUN npm i

COPY . .

EXPOSE 4000

#CMD [ "http-server", "dist" ]
CMD ["npm", "run", "start"]