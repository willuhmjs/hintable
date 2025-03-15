FROM node:22
WORKDIR /app
RUN npm i -g pnpm
COPY package*.json .
RUN pnpm i
COPY . .
RUN pnpm prisma generate
ARG JWT_SECRET="secret"
ARG ADMIN_LOGIN="secret"
ENV JWT_SECRET=${JWT_SECRET}
ENV ADMIN_LOGIN=${ADMIN_LOGIN}
RUN pnpm build
EXPOSE 3000
CMD ["node", "build/index.js", "--host", "0.0.0.0"]