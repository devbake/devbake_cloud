FROM node:10.4.0-alpine

WORKDIR /app

COPY . /app
RUN npm install && npm run build

ENV HOST 0.0.0.0
ENV PORT 3000

EXPOSE 3000

CMD [ "npm", "start" ]