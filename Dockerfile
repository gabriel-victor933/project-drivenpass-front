FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app/react-app
COPY package.json /app/react-app/
RUN npm i 
COPY . .
RUN npm run build

FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app/react-app
COPY --from=BUILD_IMAGE /app/react-app/dist /app/react-app/dist
COPY package.json .
COPY vite.config.ts .
RUN npm i typescript
EXPOSE 8080
CMD ["npm","run","preview"]