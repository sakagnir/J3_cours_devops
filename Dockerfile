FROM node:22-alpine
    WORKDIR /J1/
    COPY package*.json ./
    RUN npm ci
    COPY . .
    CMD [ "node", "src/app.js" ]