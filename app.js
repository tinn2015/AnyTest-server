'use strict'

const Koa = require('koa')
// 内置Request Body的解析器
const bodyParser = require('koa-bodyparser')()
// 静态资源中间件
const staticCache = require('koa-static-cache')
const cors = require('koa2-cors')
const helmet = require("koa-helmet")

const config = require('./config')
const publicRouter = require('./routes/public.js')
const privateRouter = require('./routes/private')
const { loggerMiddleware } = require('./middlewares/logger')
const { errorHandler, responseHandler } = require('./middlewares/response')
const { corsHandler } = require('./middlewares/cors')

const app = new Koa()

// Logger
// 必须放在第一个中间件，才能保证所以的请求及操作会先经过logger进行记录再到下一个中间件。
app.use(loggerMiddleware)

// Error Handler
app.use(errorHandler)

// Global Middlewares
app.use(bodyParser)
app.use(staticCache(config.publicDir))

// Cors
app.use(cors(corsHandler))

// Helmet
app.use(helmet())

// Routes
app.use(publicRouter.routes(), publicRouter.allowedMethods())
app.use(privateRouter.routes(), privateRouter.allowedMethods())

// Response
app.use(responseHandler)

module.exports = app

