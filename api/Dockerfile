
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma
COPY prisma.config.ts ./

RUN npm ci

# Generate Prisma Client during the image build.
# This URL is only for generation; it is not used to connect to a database.
RUN DATABASE_URL="postgresql://user:password@localhost:5432/portfolio?schema=public" npx prisma generate

# Keep runtime dependencies only.
RUN npm prune --omit=dev

COPY --chown=node:node . .

ENV NODE_ENV=production
ENV PORT=4000

EXPOSE 4000

USER node

CMD ["node", "server.js"]
