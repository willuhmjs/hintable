FROM node:18-alpine 
WORKDIR /app
COPY . .
RUN npm i -g pnpm
RUN pnpm i
RUN npx prisma generate
RUN cp ./.env.example ./.env
RUN pnpm build
ENV NODE_ENV=production
ENV DATABASE_URL="postgresql://user:pass@localhost:5432/mydb"
ENV JWT_SECRET="changeme"
ENV ADMIN_LOGIN="admin:admin"
EXPOSE 3000
CMD ["node", "build/index.js"]