FROM node:22-slim

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json .

RUN npm install

COPY ./src/ ./src/

EXPOSE 3000

CMD ["npm", "run", "dev"]
