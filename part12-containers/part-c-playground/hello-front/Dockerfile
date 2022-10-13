# The first FROM is now a stage called build-stage
FROM node:16 AS build-stage

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY --chown=node:node package*.json .

RUN npm ci --only=production

COPY --chown=node:node . .

USER node

RUN npm run build

# This is a new stage, everything before this is gone, except the files we want to COPY
FROM nginx:1.20-alpine

# COPY the directory build from build-stage to /usr/share/nginx/html
# The target location here was found from the docker hub page
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

