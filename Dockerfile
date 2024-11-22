FROM node:18-alpine 
WORKDIR /app
COPY . .
RUN npm i -g pnpm
RUN pnpm i
RUN npx prisma generate
RUN cp ./.env.example ./.env
RUN pnpm build
ENV NODE_ENV production

EXPOSE 3000
CMD ["node", "build/index.js"]