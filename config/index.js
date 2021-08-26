'use strict'

const path = require('path')

module.exports = {
  host: '127.0.0.1',
  port: '8090',
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
  },
  mysql: {
    database: 'demo',
    username: 'root',
    password: 'dqt112233',
    host: '127.0.0.1',
    port: 3306
  }
}

