import * as Koa from 'koa';
import RouterIndex from './routes'
import * as Mongoose from 'mongoose';
var bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyParser());
Mongoose.connect('mongodb://127.0.0.1:27017/login', (err: any) => {
  if (err) {
    console.log('连接失败');
  } else {
    console.log('连接成功');
  }
});


app.use(RouterIndex.routes()).use(RouterIndex.allowedMethods());   /*启动路由*/



module.exports = app;