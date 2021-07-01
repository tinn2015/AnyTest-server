'use strict'

const Router = require('koa-router')
const controllers = require('../controllers')

const router = new Router()
router.prefix('/api')

// router.get('/test', controllers.test.test)
router.get('/test', async (ctx) => {
  // ctx.request.url = '/index.html'
  // if (ctx.is('text/html')) {
  //   ctx.request.url = '../website/index.html'
  console.log('/test')
  // }
  ctx.response.body = 'dasdas'
})

module.exports = router
