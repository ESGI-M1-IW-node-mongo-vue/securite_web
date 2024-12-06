FROM node:22-alpine3.20
WORKDIR /app
COPY . /app
RUN npm install
ENV DATABASE_URL=${DATABASE_URL}
CMD ["npm", "run", "dev"]
