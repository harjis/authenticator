FROM node:alpine
WORKDIR /authenticator
COPY package.json .
RUN yarn install
COPY . .
CMD ["yarn", "start"]
