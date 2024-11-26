FROM node:16.14-alpine
WORKDIR /app-backend
COPY . .
RUN npm install
EXPOSE 8080
CMD ["sh", "-c", "npm run migration:run && npm run seed:drivers && npm run start"]
# CMD ["sh", "-c", "npm run migration:run && npm run seed:drivers"]
# CMD ["npm", "run", "start:dev"]
# CMD [ "npm", "start"]
