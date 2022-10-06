FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --only=production

ENV DEBUG=todo-backend:* PORT=3000

USER node

CMD npm start