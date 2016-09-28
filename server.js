import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import koaRouter from 'koa-router';
import logger from 'koa-logger';

const port = 4001;
const app = koa();
const router = koaRouter();

router.post('/', function *(next) {
  console.log(this.request.body);
  this.status = 200;
});

app.use(logger());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);
console.log(`echo server listening on port ${port}`);
