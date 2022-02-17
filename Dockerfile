FROM node:12 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build -- --prod --c=production --output-path dist/app --aot

FROM nginx:1.15-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./gzip_nginx.conf /etc/nginx/conf.d/gzip.conf

# Copiar distribuible a directorio configurado en nginx
COPY --from=build /app/dist/app /www

EXPOSE 5000
