FROM node:18

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

CMD ["npx", "ts-node", "src/server.ts"]

EXPOSE 3000