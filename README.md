## Clustering

To run,

```shell
npm run start # for single server
npm run cluster # for servers spawned on clusters in multiple cpu cores
```

Alternatively you could also use pm2,

```shell
npm i -g pm2
pm2 start server.js -i max
pm2 monit
pm2 stop server.js
```

