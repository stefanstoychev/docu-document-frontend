FROM node:23-alpine3.19 AS build
WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:1.27.2-alpine


COPY default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /usr/src/app/dist/docudocu/browser /usr/share/nginx/html
EXPOSE 80
