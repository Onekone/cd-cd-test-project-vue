FROM node:22-alpine AS build
WORKDIR /app

# Use the project-specified Yarn version and fail if lockfile needs updates
RUN corepack enable
COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
RUN apk add --no-cache curl
HEALTHCHECK --interval=30s --timeout=3s --retries=3 CMD curl -fsS http://127.0.0.1/ || exit 1
