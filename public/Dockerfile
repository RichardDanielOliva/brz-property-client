# Stage 1 - the build process
FROM node:12-alpine as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
COPY server.js ./
RUN yarn
COPY . ./
RUN yarn build
CMD ["node","--max-old-space-size=512", "server.js"]