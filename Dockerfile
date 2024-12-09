#Athiksha Venkannagari - G01461169
#Arsitha Sathu - G01445215
#Ramyasahithya Magani - G01425752
#Prasad Reddy Mandha - G01454689
#SaichinmayeeYanamadala - G01459318
#LikhithNattuva - G0144733
#Priya Dharshini Allapuram - G01457911
#Sreshta Kosaraju - G01460468

# Dockerfile is used to create a Docker image for the Survey form application.
# It uses node 18 as the base image and run the application.

FROM node:18 AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:alpine AS dev
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]