FROM node:23-alpine3.19 AS build
WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:1.21.5-alpine


COPY default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /usr/src/app/dist/app /usr/share/nginx/html
EXPOSE 80