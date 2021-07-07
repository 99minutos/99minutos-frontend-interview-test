FROM node:10.15.3 as build-deps
# Versions
#RUN npm -v
#RUN node -v

WORKDIR /usr/src/app
COPY package.json ./
COPY . ./
#RUN npm install
#RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]