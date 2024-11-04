FROM node:alpine

# Define build argument
ARG SECRET_KEY

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

# Production use node instead of root
# USER node

RUN npm ci

COPY . /usr/src/app

RUN echo "The secret key is: $SECRET_KEY"

RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]
