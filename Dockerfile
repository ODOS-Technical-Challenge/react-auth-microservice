FROM node:16.13.2-alpine3.15 AS builder

WORKDIR /app

COPY package.json ./
RUN yarn install

COPY . .
RUN yarn build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
