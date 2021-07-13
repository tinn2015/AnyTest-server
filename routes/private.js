'use strict'

const Router = require('koa-router')
const controllers = require('../controllers')
const jwtMiddleware = require('../middlewares/jwt')

const router = new Router()
router.prefix('/api/private')
router.use(jwtMiddleware)

router.post('/logout', controllers.user.logout)

module.exports = router
