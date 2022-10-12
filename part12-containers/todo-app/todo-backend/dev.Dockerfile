FROM node:16

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

WORKDIR /usr/src/app

COPY --chown=node:node package*.json .

RUN npm install

COPY --chown=node:node . .

ENV DEBUG=todo-backend:*

USER node

CMD ["dumb-init", "node_modules/nodemon/bin/nodemon.js", "./bin/www"]