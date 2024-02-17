# Build Stage
FROM node:20-alpine3.18 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install jest --save-dev
COPY . .

# Runtime Stage
FROM node:20-alpine3.18 AS runtime
WORKDIR /usr/src/app
COPY --from=build /usr/src/app .
EXPOSE 3000

# Switch to the non-root node user
USER node

CMD ["node", "app.js"]
