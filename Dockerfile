FROM node:slim

RUN apt-get update -y \
&& apt-get install -y openssl

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

COPY . .

RUN pnpm install

CMD ["sh", "-c", "pnpm run db:deploy && pnpm run build && ORIGIN=https://hintable.me node build"]