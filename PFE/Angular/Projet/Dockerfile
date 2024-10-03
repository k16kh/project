# Stage 1: Build the Angular app
FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli@8.1.2 --force
COPY . .
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine
COPY --from=build-stage /app/dist/project/PFE/Angular/Projet /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
