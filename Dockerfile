FROM node:14.5.0-alpine

RUN apk add --no-cache vim

ARG API_URL
ARG BASE_URL
ARG RECAPTCHA_SITE_KEY
ARG GTAG_ID

ENV API_URL=${API_URL}
ENV BASE_URL=${BASE_URL}
ENV RECAPTCHA_SITE_KEY=${RECAPTCHA_SITE_KEY}
ENV GTAG_ID=${GTAG_ID}

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8080
ENV NODE_ENV=production

RUN mkdir -p /var/www/html
COPY . /var/www/html/
RUN rm /var/www/html/Dockerfile

WORKDIR /var/www/html

RUN npm --version
RUN npm install --production=false
RUN npm run build
# RUN npm run generate

EXPOSE 8080

CMD [ "npm", "run", "start" ]
