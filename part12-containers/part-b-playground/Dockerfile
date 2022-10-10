FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --only=production

ENV DEBUG=part-b-playground:*

USER node

CMD ["node", "./bin/www"]