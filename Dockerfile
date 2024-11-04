FROM node:alpine

# Define build argument
ARG SECRET_KEY

RUN mkdir -p /usr/src/app
ENV PORT 3000

# Pass SECRET_KEY from build arg to environment variable
ENV SECRET_KEY=$SECRET_KEY

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

# Production use node instead of root
# USER node

RUN npm ci

COPY . /usr/src/app

RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]
