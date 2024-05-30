FROM node:20.10.0-alpine

WORKDIR /

COPY package.json .

COPY . .

EXPOSE 3001

RUN cd /front_end

WORKDIR /app

COPY /front_end/package.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]