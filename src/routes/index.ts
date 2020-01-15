// const router = require('koa-router')();
import * as  Router from 'koa-router';
import UserControllers from '../controllers/user'


const KoaRouter = new Router()

KoaRouter.get('/test', (ctx: any, next: Function) => {
  ctx.body = '首页';
})
.post('/signup', UserControllers.signUp)
.post('/signin', UserControllers.signIn);


export default KoaRouter