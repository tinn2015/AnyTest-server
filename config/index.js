'use strict'

const path = require('path')

module.exports = {
  host: 'localhost',
  port: '3002',
  secret: 'secret',
  publicDir: path.resolve(__dirname, '../static'),
  www: path.resolve(__dirname, '../website/api-test-spa/build'),
  logPath: path.resolve(__dirname, './logs/koa-parctice.log'),
  mongoDB: {
    database: 'common',
    username: 'root',
    password: 'root',
    host: 'localhost',
    port: 27017
  }
}

