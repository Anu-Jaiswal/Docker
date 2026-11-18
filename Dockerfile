FROM node

ENV MONGO_DB_USERNAME=anu\
    MONGO_DB_PASSWORD=anuakp 

RUN mkdir -p delta/nodeapp

COPY . /delta/nodeapp

CMD ["node", "/delta/nodeapp/server.js"]

