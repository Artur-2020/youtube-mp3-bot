FROM node:22.12

RUN apt-get update && apt-get install -y ffmpeg

RUN npm install -g ts-node typescript

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
