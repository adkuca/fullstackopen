FROM node:16 AS base
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
ENV NODE_ENV=production
# ENV  REACT_APP_BACKEND_URL="http://localhost:8080/api/"
WORKDIR /usr/src/app
COPY --chown=node:node package*.json .
RUN chown node:node /usr/src/app
USER node
RUN npm ci --only=production
COPY --chown=node:node . .

FROM base as test
ENV CI=true
USER node
RUN ["dumb-init", "node_modules/react-scripts/bin/react-scripts.js", "test"]
# RUN npm run test

FROM test as build
USER node
RUN ["dumb-init", "node_modules/react-scripts/bin/react-scripts.js", "build"]
# RUN npm run build

FROM nginx:1.20-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html