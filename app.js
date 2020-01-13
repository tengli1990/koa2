const Koa = require('koa')
const Router = require('koa-router')()
const BodyParser = require('koa-bodyparser')
const KoaJson = require('koa-json')

// 实例化
const app = new Koa()

app.use(BodyParser())
app.use(KoaJson())