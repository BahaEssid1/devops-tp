FROM node:22-alpine

# Update npm to resolve vulnerabilities in npm's bundled dependencies.
RUN npm install -g npm@11.21.1

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

# npm is only needed during the build, not when running the API.
RUN rm -rf /usr/local/lib/node_modules/npm \
    /usr/local/bin/npm \
    /usr/local/bin/npx

ENV NODE_ENV=production
ENV PORT=4000

EXPOSE 4000

USER node

CMD ["node", "server.js"]