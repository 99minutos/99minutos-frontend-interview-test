#STEP 1 BUILD OF REACT PROJECT
FROM node:14-alpine AS Build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

#STEP 2 CREATE NGINX SERVER
FROM nginx:1.19-alpine AS prod-stage
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]