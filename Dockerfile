FROM node:12

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

COPY . /usr/src/app/

EXPOSE 443

ENTRYPOINT ["node", "index"]