FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN npm i -g pnpm
RUN pnpm i
RUN pnpm build

ENV HOST=0.0.0.0
ENV PORT=8080
EXPOSE 8080

CMD node ./dist/server/entry.mjs