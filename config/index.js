'use strict'

const path = require('path')

module.exports = {
  port: '3002',
  secret: 'secret',
  publicDir: path.resolve(__dirname, '../website'),
  logPath: path.resolve(__dirname, './logs/koa-parctice.log'),
  mongoDB: {
    database: 'common',
    username: 'root',
    password: 'root',
    host: 'localhost',
    port: 27017
  }
}

