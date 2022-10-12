FROM node:16

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY --chown=node:node package*.json .

RUN npm ci --only=production

COPY --chown=node:node . .

ENV DEBUG=part-b-playground:*

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

USER node

CMD ["dumb-init", "node", "./bin/www"]