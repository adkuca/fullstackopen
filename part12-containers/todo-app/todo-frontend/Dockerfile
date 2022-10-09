FROM node:16 AS base
ENV REACT_APP_BACKEND_URL="//localhost:3000"
WORKDIR /usr/src/app
COPY . .
RUN npm ci

FROM base as test
ENV CI=true
RUN npm run test

FROM test as build
RUN npm run build

FROM nginx:1.20-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html