'use strict'

const Router = require('koa-router')
const controllers = require('../controllers')

const router = new Router()
router.prefix('/api')

// router.get('/test', controllers.test.test)
router.get('/', async (ctx) => {
  ctx.type = 'html'
  ctx.body = '<h1>hello world</h1>'
})

module.exports = router
