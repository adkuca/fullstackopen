FROM node:16

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY --chown=node:node package*.json .

RUN npm ci --only=production

COPY --chown=node:node . .

ENV DEBUG=todo-backend:*

USER node

CMD ["dumb-init", "node", "./bin/www"]