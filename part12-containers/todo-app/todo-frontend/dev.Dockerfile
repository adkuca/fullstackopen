FROM node:16

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

WORKDIR /usr/src/app

COPY --chown=node:node package*.json .

RUN chown node:node /usr/src/app

USER node

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

COPY --chown=node:node . .

CMD ["dumb-init", "node_modules/react-scripts/bin/react-scripts.js", "start"]