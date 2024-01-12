FROM node:18-alpine
WORKDIR /app/react-app
COPY package.json /app/react-app/
RUN npm i 
COPY . .
RUN npm run build