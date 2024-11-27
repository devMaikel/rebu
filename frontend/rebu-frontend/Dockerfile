FROM node:20-alpine
WORKDIR /app-frontend
COPY . .
RUN npm install
EXPOSE 80
CMD [ "npm", "run", "prod"]
