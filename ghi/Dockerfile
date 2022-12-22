FROM node:lts-bullseye
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
ENV NODE_ENV production
ENV HOST_OS ${OS}
ENV HOST 0.0.0.0
ENV PUBLIC_URL: https://bonjuurreact.azurewebsites.net
ENV REACT_APP_BONJUUR_API_HOST: https://bonjuurapi.azurewebsites.net
ENV REACT_APP_WS_HOST: ws://bonjuurapi.azurewebsites.net
EXPOSE 3000
CMD [ "npx", "serve", "-s", "build" ]
